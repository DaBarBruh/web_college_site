import sys
import re
import os

def refactor_file(file_path):
    print(f"I am processing: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # 1. Remove body.loading css
        content = re.sub(r'/\* CHANGED \*/\s*/\* forcing to load the script buy having an invisible element to be loaded with the content too \*/\s*body\.loading\s*\{\s*visibility:\s*hidden;\s*\}', '', content, flags=re.DOTALL)
        
        # 2. Uncomment footer placeholder
        content = content.replace('<!-- <div id="footer-placeholder"></div> -->', '<div id="footer-placeholder"></div>')
        
        # 3. Remove commented loadHeader script
        # Pattern: <!-- <script> ... initMobileSubmenus();\s*}\s*// Загружаем хедер при полной загрузке DOM\s*document.addEventListener\('DOMContentLoaded', loadHeader\); ... </script> -->
        # We need a robust regex.
        script_pattern = r'<!-- <script>\s*// Функция для загрузки и инициализации хедера.*?const styleElement = document\.createElement\(\'style\'\);\s*styleElement\.textContent = mobileMenuStyles;\s*document\.head\.appendChild\(styleElement\);\s*</script> -->'
        
        content = re.sub(script_pattern, '', content, flags=re.DOTALL)

        # 4. Remove hardcoded footer
        # Pattern: <footer class="footer"> ... </footer>
        footer_pattern = r'<footer class="footer">.*?</footer>'
        content = re.sub(footer_pattern, '', content, flags=re.DOTALL)
        
        # 5. Remove manual DOMContentLoaded script
        # Pattern: <!-- CHANGED -->\s*<!-- Unified dom conent loader \(does not work no effect\) -->\s*<script>\s*document\.addEventListener\("DOMContentLoaded", async \(\) => \{.*?\}\s*\</script>
        manual_script_pattern = r'<!-- CHANGED -->\s*<!-- Unified dom conent loader \(does not work no effect\) -->\s*<script>\s*document\.addEventListener\("DOMContentLoaded", async \(\) => \{.*?</script>'
        content = re.sub(manual_script_pattern, '', content, flags=re.DOTALL)

        # 6. Ensure loadLayout.js is present
        if '/static/loadLayout.js' not in content:
            # Add it after header-placeholder
            content = content.replace('<div id="header-placeholder"></div>', '<div id="header-placeholder"></div>\n    <script src="/static/loadLayout.js"></script>')

        # 7. Clean up empty lines created by removals (optional but good)
        content = re.sub(r'\n{3,}', '\n\n', content)

        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print("Updated.")
        else:
            print("No changes needed or patterns did not match.")
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        for file_path in sys.argv[1:]:
            refactor_file(file_path)
    else:
        print("Usage: python refactor_html.py <file_path> ...")
