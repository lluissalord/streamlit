#!/usr/bin/env python
import re
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
LICENSE_TEXT = (SCRIPT_DIR / "license-template.txt").read_text().splitlines()[0]
print("LICENSE_TEXT=", repr(LICENSE_TEXT))
git_files = sorted(
    subprocess.check_output(["git", "ls-files", "--no-empty-directory"])
    .decode()
    .strip()
    .splitlines()
)

IGNORE_PATTERN = re.compile(
    r"^.github"  # Exclude CI files
    r"|\.(?:png|gif|ttf|woff|otf|eot|woff2|ico|svg)$"  # Exclude images
    r"|LICENSE$"  # Exclude LICENSE
    r"|NOTICES$"  # Exclude NOTICES
    r"|\.json$"  # Exclude json, because it doesn't support comments
    r"|/yarn\.lock$"  # Exclude generated files
    r"|/(fixtures|__snapshots__|vendor|test_data|data)/"  # Exclude fixtures data
    r"|py\.typed$",
    re.IGNORECASE,
)
invalid_files_count = 0
for fileloc in git_files:
    if IGNORE_PATTERN.search(fileloc):
        continue
    filepath = Path(fileloc)
    # Exclude submodules
    if not filepath.is_file():
        continue

    try:
        file_content = filepath.read_text()
        if LICENSE_TEXT not in file_content:
            print(fileloc)
            invalid_files_count += 1
    except:
        print("Invalid encoding: ", fileloc)
        invalid_files_count += 1

print("Invalid files count:", invalid_files_count)
if invalid_files_count > 0:
    sys.exit(1)
