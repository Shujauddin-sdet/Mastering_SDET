# Linux Commands Guide

## Table of Contents
- [Overview](#overview)
- [pwd – "Where am I right now?"](#pwd--where-am-i-right-now)
- [ls – "What’s in this room?"](#ls--whats-in-this-room)
- [cd – "Go to another room"](#cd--go-to-another-room)
- [mkdir – "Create a new folder"](#mkdir--create-a-new-folder)
- [touch – "Create an empty file"](#touch--create-an-empty-file)
- [rm – "Delete a file or folder"](#rm--delete-a-file-or-folder)
- [rm -rf – "Force delete a folder and everything inside without asking"](#rm--rf--force-delete-a-folder-and-everything-inside-without-asking)
- [cp – "Copy a file or folder"](#cp--copy-a-file-or-folder)
- [mv – Move or Rename Files and Folders](#mv--move-or-rename-files-and-folders)
- [cat – View and Combine File Contents](#cat--view-and-combine-file-contents)
- [head – View the First Few Lines of a File](#head--view-the-first-few-lines-of-a-file)
- [tail – View the Last Few Lines of a File](#tail--view-the-last-few-lines-of-a-file)
- [nano – Simple Terminal Text Editor](#nano--simple-terminal-text-editor)
- [grep – Search Inside Files](#grep--search-inside-files)
- [find – Search for Files and Folders by Name](#find--search-for-files-and-folders-by-name)
- [chmod – Change File Permissions](#chmod--change-file-permissions)
- [Shell Variables – Store and Reuse Values](#shell-variables--store-and-reuse-values)
- [Command Line & Linux Basics – Quick Reference](#command-line--linux-basics--quick-reference)

## Overview
- Navigation (`pwd`, `ls`, `cd`)
- File operations (`mkdir`, `touch`, `rm`, `cp`, `mv`)
- Log viewing (`cat`, `head`, `tail`, `nano`)
- Searching (`grep`, `find`)
- Permissions (`chmod`) & shell variables

## pwd – "Where am I right now?"
- **🔍 Simple Analogy**
  - Imagine you're walking through a huge building with many rooms. You stop and ask, "Which room am I standing in right now?"
  - The answer might be: "You're in the Kitchen, on Floor 2."
  - In the terminal, `pwd` is that question. It tells you exactly which folder (directory) you're currently inside.
- **💻 What to type**
  - Open your terminal (Command Prompt, Git Bash, VS Code terminal, or any online Linux terminal).
  - Type exactly this and press Enter:
    ```bash
    pwd
    ```
  - You'll see something like `/home/yourname` or `C:\Users\YourName`. That's your current location.
- **🧠 Why it matters for a QA/SDET**
  - When you run test scripts, check logs, or configure CI/CD, you need to know where you are in the folder structure. `pwd` is your compass.

## ls – "What’s in this room?"
- **🔍 Simple Analogy**
  - You now know which room you’re standing in (`pwd`). The next question is: "What’s inside this room? What files and folders are here?"
  - `ls` lists everything in the current folder.
- **💻 What to type**
  - In your terminal, type:
    ```bash
    ls
    ```
  - You’ll see a list of file and folder names.
  - For more detail (like size, date, permissions), use:
    ```bash
    ls -l
    ```
  - For hidden files (those starting with a dot), use:
    ```bash
    ls -a
    ```
- **🧠 Why it matters for a QA/SDET**
  - You’ll use `ls` constantly to see what test reports, log files, or scripts exist in a folder before you open or run them. It’s your first look at your test environment.

## cd – "Go to another room"
- **🔍 Simple Analogy**
  - You’re in a room. You want to walk into the kitchen or go back to the living room.
  - `cd` moves you from one folder to another.
- **💻 What to type**
  - Move into a folder:
    ```bash
    cd foldername
    ```
  - Go back up one level (to the parent folder):
    ```bash
    cd ..
    ```
  - Jump straight to your home folder:
    ```bash
    cd ~
    ```
- **🧠 Why it matters for a QA/SDET**
  - You’ll use `cd` to navigate into your test project, log folders, or CI/CD directories so you can run scripts and inspect files.

## mkdir – "Create a new folder"
- **🔍 Simple Analogy**
  - You want a new empty drawer in your filing cabinet.
  - `mkdir` creates a brand-new folder for you to put files into.
- **💻 What to type**
  - 
    ```bash
    mkdir my-test-reports
    ```
  - This creates a folder named `my-test-reports` inside your current location.
  - To check it worked:
    ```bash
    ls
    ```
  - You'll see the new folder listed.
- **🧠 Why it matters for a QA/SDET**
  - You'll create folders to organise test outputs, logs, screenshots, and test data during manual test runs or inside CI/CD scripts.

## touch – "Create an empty file"
- **🔍 Simple Analogy**
  - You take a blank sheet of paper and write a title at the top, ready to fill in later.
  - `touch` creates an empty file instantly.
- **💻 What to type**
  - 
    ```bash
    touch log.txt
    ```
  - This creates an empty file named `log.txt` in your current folder.
  - Check with:
    ```bash
    ls
    ```
- **🧠 Why it matters for a QA/SDET**
  - You often need placeholder files for test data, or to quickly create a log file that a script expects to write into. `touch` is the fastest way to do that.

## rm – "Delete a file or folder"
- **🔍 Simple Analogy**
  - You crumple up a piece of paper and throw it in the bin.
  - `rm` permanently removes a file or folder.
- **💻 What to type**
  - Delete a file:
    ```bash
    rm log.txt
    ```
  - Delete a folder and everything inside it:
    ```bash
    rm -r my-test-reports/
    ```
  - ⚠️ There is no recycle bin – once you `rm`, it’s gone forever.
- **🧠 Why it matters for a QA/SDET**
  - You’ll clean up old test reports, logs, or temporary data so your test environment stays tidy, especially in CI/CD pipelines where leftover files can cause failures.

## rm -rf – "Force delete a folder and everything inside without asking"
- **🔍 Simple Analogy**
  - You have a filing cabinet drawer that you want to throw out completely — no confirmation, no checking what’s inside, just gone.
  - `rm` = delete a file.
  - `-r` (recursive) = delete the folder and all its contents (subfolders, files).
  - `-f` (force) = don't ask me "are you sure?" — just do it immediately.
  - Combined: `rm -rf foldername` wipes that folder and everything in it, silently.
- **⚠️ Why it's dangerous**
  - In a real job, you might accidentally run:
    ```bash
    rm -rf /
    ```
  - which tries to delete your entire system. That’s why we use it carefully and only on folders we are absolutely sure about.

## cp – "Copy a file or folder"
- **🔍 Simple Analogy**
  - You make a photocopy of a document so you have a spare. The original stays unchanged.
  - `cp` duplicates a file or an entire folder.
- **💻 What to type**
  - Copy a file:
    ```bash
    cp original.txt backup.txt
    ```
  - Copy an entire folder:
    ```bash
    cp -r my-folder/ my-folder-copy/
    ```
- **🧠 Why it matters for a QA/SDET**
  - You’ll copy test data files, configuration templates, or previous test reports before modifying them. It’s the safest way to keep a backup while testing changes.

## mv – Move or Rename Files and Folders
- **🔍 Simple Analogy**
  - You’re holding a piece of paper. You can do two things with it:
    - **Rename it** – you erase the old title and write a new one. The paper stays right where it is.
    - **Move it** – you put it inside a drawer (a folder). The paper now lives inside that drawer.
  - You can even move it to a drawer in another room, or pick up an entire drawer and place it somewhere else.
  - In the terminal, `mv` is the command that does all of this. It’s a single action that can mean rename or move depending on what you tell it.
- **💻 The Golden Rule**
  - If the destination is an existing folder → the file or folder moves inside that folder.
  - If the destination does not exist → the source is renamed to that new name.
  - This rule works for both files and folders.
- **💻 Rename a File**
  - You stay in the same folder; you just change the name.
    ```bash
    mv draft.txt final.txt
    ```
  - `draft.txt` must exist.
  - `final.txt` does not exist yet.
  - Result: `draft.txt` disappears, and `final.txt` appears with the same contents.
- **💻 Move a File into a Folder**
  - You place the file inside a folder that already exists.
    ```bash
    mv log.txt my-folder/
    ```
  - `my-folder/` must already exist (create it with `mkdir my-folder` if needed).
  - The trailing `/` is optional; it just reminds you that you mean a folder.
  - Result: `log.txt` disappears from the current location and now lives inside `my-folder/`.
- **💻 Move a File to Another Folder and Rename It at the Same Time**
  - You can combine both actions.
    ```bash
    mv notes.txt archive/notes-old.txt
    ```
  - The `archive/` folder must exist.
  - `notes.txt` is moved into `archive/` and renamed to `notes-old.txt`.
  - Result: only `archive/notes-old.txt` remains.
- **💻 Rename a Folder**
  - The same renaming logic applies to folders.
    ```bash
    mv old-project/ new-project/
    ```
  - `old-project/` is a folder that exists.
  - `new-project/` does not exist yet.
  - Result: the entire folder gets renamed. All its contents stay inside.
- **💻 Move a Folder into Another Folder**
  - 
    ```bash
    mv my-tests/ backup/
    ```
  - `backup/` must already exist.
  - Result: `my-tests/` becomes a subfolder inside `backup/`. Now the path is `backup/my-tests/`.

## cat – View and Combine File Contents
- **🔍 Simple Analogy**
  - You have a stack of paper sheets. You want to read what's written on them. You could pick up each sheet and read it one by one, but `cat` just lays all the sheets flat on the table in front of you at once so you can see everything in one go. It doesn't open an editor — it just dumps the text to your screen.
  - You can also use it to combine (concatenate) multiple sheets into one long roll of paper.
- **💻 What `cat` does**
  - **View a file** – prints the entire contents of one or more files to the terminal.
  - **Combine files** – puts two or more files together and saves them into a new file.
- **🧪 Let's create a test file first**
  - We'll use `echo` to make a small file so we can practice.
    ```bash
    echo "Line 1: Hello" > sample.txt
    echo "Line 2: World" >> sample.txt
    ```
  - `>` writes the first line (creates or overwrites the file).
  - `>>` adds the second line to the end of the file.
- **📖 View a file**
  - 
    ```bash
    cat sample.txt
    ```
  - Output:
    ```text
    Line 1: Hello
    Line 2: World
    ```
  - The entire file is printed instantly. If the file is very long, the text will scroll. For short files (like configuration files, test results, or logs), `cat` is perfect.
- **📋 View multiple files at once**
  - You can give `cat` several filenames; it prints them one after another.
  - First, create a second file:
    ```bash
    echo "Line 3: Bonus" > extra.txt
    ```
  - Now view both together:
    ```bash
    cat sample.txt extra.txt
    ```
  - Output:
    ```text
    Line 1: Hello
    Line 2: World
    Line 3: Bonus
    ```
  - Notice the two files are displayed in sequence. You can list as many files as you want.
- **🔗 Combine files into a new file (concatenation)**
  - The real power of `cat` (which stands for concatenate) is joining files.
    ```bash
    cat sample.txt extra.txt > combined.txt
    ```
  - Now `combined.txt` contains the contents of both files:
    ```bash
    cat combined.txt
    ```
  - Output:
    ```text
    Line 1: Hello
    Line 2: World
    Line 3: Bonus
    ```
  - `>` redirects the combined output into a new file instead of printing to the screen.
  - This is extremely useful when you need to merge test logs or results from multiple test runs.
- **🔄 Use cat with pipes**
  - You can send the output of `cat` directly into another command using the pipe `|`. For example, count the number of lines in a file:
    ```bash
    cat sample.txt | wc -l
    ```
  - This prints the number of lines (2). The pipe takes the output of `cat` and feeds it to `wc -l` (word count, lines). This is a common pattern when you want to process a file without modifying it.
- **⚠️ A note about file size**
  - `cat` reads the entire file into memory and dumps it to the screen. For huge files (like massive log files), it's better to use `head`, `tail`, or `less` to avoid flooding your terminal. For QA work, `cat` is ideal for small to medium‑sized files like test reports, config files, and scripts.
- **🧠 Why a QA/SDET uses cat daily**
  - Inspecting test output: after a test run, quickly see what happened by reading the test result file.
  - Checking configuration files: verify environment settings before running tests.
  - Creating quick test data: combine pieces of data into a single file for data‑driven tests.
  - Merging log files: combine logs from different services before analysis.
  - Verifying file creation: when a script writes a file, use `cat` to confirm the content.
- **📝 Summary**
  - `cat filename` – view a file's contents.
  - `cat file1 file2` – view multiple files in order.
  - `cat file1 file2 > combined` – merge files into one new file.
  - `cat file | another_command` – send file content to another program.
  - `cat` does not edit files; it only reads and displays.

## head – View the First Few Lines of a File
- **🔍 Simple Analogy**
  - You have a long scroll of paper. Instead of unrolling the entire scroll, you just peek at the very top to see the first few lines. `head` does exactly that – it shows you the beginning of a file and ignores the rest.
- **💻 What to type**
  - 
    ```bash
    head filename.txt
    ```
  - By default, this prints the first 10 lines.
  - If you want a different number of lines, use `-n`:
    ```bash
    head -n 5 filename.txt   # first 5 lines
    ```
- **🧠 Why a QA/SDET uses it**
  - Quickly check the beginning of a large log file (e.g., test start time).
  - Inspect the header of a CSV or configuration file without opening the whole thing.
  - Verify that a freshly created file starts with the expected content.

## tail – View the Last Few Lines of a File
- **🔍 Simple Analogy**
  - Instead of the top of the scroll, you unroll the very end to see the latest entries. `tail` shows the last few lines of a file.
- **💻 What to type**
  - 
    ```bash
    tail filename.txt       # last 10 lines by default
    tail -n 5 filename.txt  # last 5 lines
    ```
- **🧠 Why a QA/SDET uses it**
  - View the most recent entries in a log file (e.g., latest test results).
  - Watch a log file in real time with the `-f` option:
    ```bash
    tail -f app.log
    ```

## nano – Simple Terminal Text Editor
- **🔍 Simple Analogy**
  - You pick up a pen and directly start writing on a sheet of paper. You can add new text, erase words, and when you’re done, you save the paper in a folder.
  - `nano` is that simple pen and paper inside the terminal. It lets you open a file, type or edit content, and save your changes — all without a mouse or fancy menus.
- **💻 What to type**
  - Open a file (creates a new one if it doesn't exist):
    ```bash
    nano myfile.txt
    ```
  - Inside `nano`, you see the file content and a list of keyboard shortcuts at the bottom (the `^` symbol means `Ctrl`).
- **⌨️ Essential Keyboard Shortcuts**
  - **Save (Write Out)**: `Ctrl + O` then `Enter`
  - **Exit**: `Ctrl + X`
  - **Cut a line**: `Ctrl + K`
  - **Paste (Uncut)**: `Ctrl + U`
  - **Search**: `Ctrl + W`
- **🧪 Try It Yourself**
  - Open a new file:
    ```bash
    nano test.txt
    ```
  - Type some text, e.g.: `This is a test file.`
  - Save: press `Ctrl + O`, then press `Enter` to confirm the filename.
  - Exit: press `Ctrl + X`.
  - Now check the file:
    ```bash
    cat test.txt
    ```
- **🧠 Why a QA/SDET uses nano**
  - Quickly edit configuration files before a test run (e.g., `.env`, `config.yml`).
  - Write or modify simple shell scripts directly on the server.
  - Read and edit log files or test result files when a full editor isn’t available.
  - It’s lightweight, available on almost every Linux/Unix system, and works perfectly over SSH connections.

## grep – Search Inside Files
- **🔍 Simple Analogy**
  - You have a thick book and you want to find every page that mentions the word “Error”. Instead of reading the whole book, you use a highlighter that instantly flags the exact pages and lines where the word appears.
  - `grep` is that highlighter. It scans files and prints only the lines that contain your search term.
- **💻 Basic Usage**
  - Search for a word in a single file:
    ```bash
    grep "Error" log.txt
    ```
  - This prints every line in `log.txt` that contains the text `Error`.
- **🔧 Useful Options**
  - `-i` : Ignore case (find error, Error, ERROR) -> `grep -i "error" log.txt`
  - `-r` : Recursively search all files in a folder -> `grep -r "timeout" .`
  - `-n` : Show line numbers -> `grep -n "failed" results.log`
  - `-c` : Count how many lines match -> `grep -c "PASS" report.txt`
- **🧪 Try It Yourself**
  - Create a sample log file first:
    ```bash
    echo "INFO: Server started" > app.log
    echo "ERROR: Database connection failed" >> app.log
    echo "INFO: User login successful" >> app.log
    echo "ERROR: Timeout on request" >> app.log
    ```
  - Now search:
    ```bash
    grep "ERROR" app.log          # all error lines
    grep -i "error" app.log       # case‑insensitive
    grep -c "ERROR" app.log       # count = 2
    grep -n "ERROR" app.log       # with line numbers
    ```
- **🧠 Why a QA/SDET uses grep**
  - Quickly find failures in massive CI/CD logs.
  - Search for specific test case IDs across multiple result files.
  - Filter stack traces or exceptions from crash reports.
  - Verify that a configuration file contains the expected value.
  - Combine with other commands using pipes: `cat app.log | grep "ERROR"`
  - `grep` is one of the most used terminal tools in a tester's daily life.

## find – Search for Files and Folders by Name
- **🔍 Simple Analogy**
  - You have a huge filing cabinet with hundreds of drawers. Instead of opening each drawer to find a file called `report.pdf`, you use a magic scanner that instantly tells you exactly which drawer the file is in—and even shows the full path to reach it.
  - `find` is that scanner. It searches through folders and subfolders and returns a list of files or folders that match your conditions.
- **💻 What to type**
  - The basic pattern is:
    ```bash
    find starting-folder -name "filename"
    ```
  - `starting-folder` – where to begin the search (use `.` for the current folder).
  - `-name` – tells `find` you’re searching by name.
  - `"filename"` – the name (or pattern) you’re looking for.
- **🧪 Try It Yourself**
  - First, create a few test files and folders:
    ```bash
    mkdir -p project/logs project/reports
    touch project/logs/error.log project/logs/access.log project/reports/summary.txt
    ```
  - Now search:
  - Find a file by exact name:
    ```bash
    find . -name "error.log"
    ```
    - Output: `./project/logs/error.log`
  - Find all files with `.log` extension (use wildcard `*`):
    ```bash
    find . -name "*.log"
    ```
    - Output: both `error.log` and `access.log`.
  - Find folders by name:
    ```bash
    find . -name "reports" -type d
    ```
    - (`-type d` means "directory")
  - Find all files modified in the last 1 day:
    ```bash
    find . -mtime -1
    ```
    - (`-mtime -1` = modified less than 1 day ago)
- **🧠 Why a QA/SDET uses find**
  - Locate test report files that were generated today.
  - Search for configuration files scattered across a project.
  - Clean up old log files: `find . -name "*.log" -mtime +7 -delete` (careful!).
  - Build automation scripts that process all files of a certain type in a folder tree.
  - `find` is your go-to when you know what you need but not exactly where it is.

## chmod – Change File Permissions
- **🔍 Simple Analogy**
  - Imagine you have a locker with three keys:
    - One key for yourself (the owner).
    - One key for a group of trusted friends.
    - One key for everyone else in the building.
  - You can decide who can open the locker (read), put things inside or change them (write), or run a machine that’s stored inside (execute).
  - `chmod` is the command that hands out or takes away these keys for every file and folder on the system.
- **💻 Understanding the permission groups**
  - Every file has three sets of permissions, in this order:
    - **User (u)**: The owner of the file (you).
    - **Group (g)**: A group of users (like your team).
    - **Others (o)**: Everyone else on the system.
  - Each group can have three types of access:
    - **Read (r)**: Can view the contents of a file or list a folder.
    - **Write (w)**: Can modify a file or create/delete files in a folder.
    - **Execute (x)**: Can run the file as a program or enter the folder.
- **📋 Viewing permissions**
  - Use `ls -l` to see permissions:
    ```bash
    ls -l myfile.txt
    ```
  - Output:
    ```text
    -rw-r--r--  1 user  staff  0 Jul  4 12:00 myfile.txt
    ```
  - The first column `-rw-r--r--` is the permission string. Break it down:
    - **Position 1**: `-` : File type (`-` = file, `d` = directory)
    - **Position 2‑4**: `rw-` : User permissions: read (yes), write (yes), execute (no)
    - **Position 5‑7**: `r--` : Group permissions: read (yes), write (no), execute (no)
    - **Position 8‑10**: `r--` : Others permissions: read (yes), write (no), execute (no)
- **🧪 Making a file executable (most common QA use)**
  - You write a shell script or a test runner script and need to run it. First, you must give it execute permission:
    ```bash
    chmod +x script.sh
    ```
  - Now check:
    ```bash
    ls -l script.sh
    ```
  - You'll see `x` added for all three groups (user, group, others).
  - To remove execute permission:
    ```bash
    chmod -x script.sh
    ```
- **🔢 Numeric (Octal) Permissions – Quick Reference**
  - Many professionals use numbers to set all permissions at once. Each permission gets a value:
    - **Read (r)**: 4
    - **Write (w)**: 2
    - **Execute (x)**: 1
  - You sum them for each group. Common combinations:
    - `chmod 755 file` : rwx (7) r-x (5) r-x (5) -> Full for owner, read/execute for group/others (standard for scripts).
    - `chmod 644 file` : rw- (6) r-- (4) r-- (4) -> Owner can read/write, others can only read (good for config files).
    - `chmod 777 file` : rwx (7) rwx (7) rwx (7) -> Everyone can do anything (dangerous, avoid for important files).
- **🧪 Try it yourself**
  - 
    ```bash
    # Create a simple script
    echo 'echo "Hello, this script works"' > test.sh
    
    # Check current permissions
    ls -l test.sh
    
    # Make it executable
    chmod +x test.sh
    
    # Run it
    ./test.sh
    ```
  - You'll see `Hello, this script works` printed. If you ever see `Permission denied` when running a script, it's because you forgot `chmod +x`.
- **🧠 Why a QA/SDET uses chmod**
  - Making test automation scripts executable before they can run in CI/CD.
  - Setting appropriate permissions on sensitive files like API keys (owner read‑only: `chmod 600 key.pem`).
  - Fixing "Permission denied" errors when accessing logs or running scripts on a server.
  - Ensuring generated test reports are readable by everyone (`chmod 644 report.html`).

## Shell Variables – Store and Reuse Values
- **🔍 Simple Analogy**
  - You write a piece of information on a sticky note and stick it to your monitor — a URL, a password, a folder path. Whenever you need it, you just glance at the note. You can change what’s written there, or peel it off and throw it away.
  - A shell variable is that sticky note. It’s a named placeholder that holds a piece of text, like a server address or a file name. You can use it anywhere in your terminal session.
- **💻 Setting and using a variable**
  - Set a variable (no spaces around `=`):
    ```bash
    NAME="Alice"
    ```
  - Use the variable by prefixing its name with `$`:
    ```bash
    echo $NAME        # prints Alice
    ```
- **🌍 Environment variables (visible to child processes)**
  - To make a variable available to scripts or programs you run from the terminal, use `export`:
    ```bash
    export BASE_URL="https://api.example.com"
    ```
  - Now any script or command that runs in this shell can see `$BASE_URL`.
  - List all environment variables:
    ```bash
    env
    ```
- **🧪 Try It Yourself**
  - 
    ```bash
    # Store a value
    USER_NAME="Shujauddin"
    echo "Hello, $USER_NAME"
    
    # Store a file path and use it
    LOG_DIR="/var/log/myapp"
    echo "Logs are in $LOG_DIR"
    ls $LOG_DIR
    ```
- **🧠 Why a QA/SDET uses shell variables**
  - Store API URLs and tokens so you don’t hardcode them into scripts.
  - Set environment‑specific configurations in CI/CD pipelines (e.g., `STAGING_URL`, `PROD_URL`).
  - Reuse long file paths instead of typing them repeatedly.
  - Pass secrets safely — CI/CD systems inject variables without writing them in the code.
  - Control test behaviour: `TEST_ENV=staging npm test`
  - Shell variables are everywhere in automation. They connect your scripts to the outside world.

## Command Line & Linux Basics – Quick Reference

| Command | Purpose | Example(s) | QA/SDET Use |
|---------|---------|------------|-------------|
| `pwd` | Show current folder path | `pwd` | Know your location in CI logs, project folders |
| `ls` | List files/folders | `ls`, `ls -l`, `ls -a` | Check what test reports, logs, or scripts exist |
| `cd` | Change directory | `cd test-reports`, `cd ..`, `cd ~` | Navigate between project, log, and config folders |
| `mkdir` | Create a new folder | `mkdir reports` | Organise test outputs, screenshots, or data |
| `touch` | Create an empty file | `touch log.txt` | Placeholder files for test data or future logs |
| `rm` | Delete files/folders | `rm file.txt`, `rm -r folder/` | Clean up temporary test artefacts |
| `rm -rf` | Force delete without prompts | `rm -rf old-tests/` | Fast cleanup in scripts (use with caution) |
| `cp` | Copy files/folders | `cp a.txt b.txt`, `cp -r src/ dest/` | Backup test data, duplicate config files |
| `mv` | Move or rename files/folders | `mv old.txt new.txt`, `mv file.txt archive/` | Organise test results, rename logs |
| `cat` | View / combine file contents | `cat log.txt`, `cat a.txt b.txt > c.txt` | Inspect test output, merge logs |
| `head` | Show first lines of a file | `head -n 5 log.txt` | Check test start markers, CSV headers |
| `tail` | Show last lines of a file | `tail -n 10 log.txt`, `tail -f log.txt` | View latest test results, watch live CI logs |
| `nano` | Simple terminal text editor | `nano config.yml` | Edit configs or scripts directly on the server |
| `grep` | Search inside files | `grep "Error" log.txt`, `grep -i -r "timeout" .` | Find failures in logs, verify config values |
| `find` | Search for files by name | `find . -name "*.log"`, `find . -mtime -1` | Locate test reports, old logs to archive |
| `chmod` | Change file permissions | `chmod +x script.sh`, `chmod 644 report.html` | Make scripts executable, set read‑only secrets |
| `export` | Set environment variables | `export BASE_URL="https://…"`, `echo $BASE_URL` | Store URLs, tokens, test environment switches |
