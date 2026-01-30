import os
import re

def refactor_file(file_path):
    print(f"Processing: {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # 1. Remove body.loading css
        # Matches the specific comment and css block
        css_pattern = r'/\* CHANGED \*/\s*/\* forcing to load the script buy having an invisible element to be loaded with the content too \*/\s*body\.loading\s*\{\s*visibility:\s*hidden;\s*\}'
        content = re.sub(css_pattern, '', content, flags=re.DOTALL)
        
        # 2. Uncomment footer placeholder
        # Use simple replace for this specific string
        content = content.replace('<!-- <div id="footer-placeholder"></div> -->', '<div id="footer-placeholder"></div>')
        
        # 3. Remove commented loadHeader script
        # This is a large block. We match from <!-- <script> to </script> --> and check if it contains "loadHeader"
        # We use a non-greedy match for the content between tags
        script_pattern = r'<!-- <script>[\s\S]*?loadHeader[\s\S]*?</script> -->'
        content = re.sub(script_pattern, '', content, flags=re.DOTALL)

        # 4. Remove hardcoded footer
        # Matches <footer class="footer"> ... </footer>
        footer_pattern = r'<footer class="footer">[\s\S]*?</footer>'
        content = re.sub(footer_pattern, '', content, flags=re.DOTALL)
        
        # 5. Remove manual DOMContentLoaded script
        # Matches <!-- Unified dom conent loader ... --> <script> ... </script>
        manual_script_pattern = r'<!-- CHANGED -->\s*<!-- Unified dom conent loader \(does not work no effect\) -->\s*<script>[\s\S]*?document\.addEventListener\("DOMContentLoaded"[\s\S]*?</script>'
        content = re.sub(manual_script_pattern, '', content, flags=re.DOTALL)

        # 6. Ensure loadLayout.js is present
        # If it's not there, add it after header-placeholder
        if '/static/loadLayout.js' not in content:
            if '<div id="header-placeholder"></div>' in content:
                content = content.replace('<div id="header-placeholder"></div>', '<div id="header-placeholder"></div>\n    <script src="/static/loadLayout.js"></script>')
            # Fallback if header-placeholder not found? Might explicitly place it manually if needed, but let's assume it exists or we skip.
        
        # 7. Cleanup extra newlines
        content = re.sub(r'\n{3,}', '\n\n', content)

        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print("  Updated.")
        else:
            print("  No changes.")
            
    except Exception as e:
        print(f"  Error: {e}")

def main():
    start_dir = r"c:\Users\Алан\Desktop\web_college_site_new-main\views"
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file.endswith(".html"):
                refactor_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
