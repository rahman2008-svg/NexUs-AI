The Complete Guide to Capturing NexUs AI Bug Reports for Android Devices
Thank you for helping us improve the NexUs AI app!
To find and fix bugs effectively, our engineers need detailed diagnostic information from your device. A Full Bug Report is the best way to provide this.
This guide explains how to capture bug reports on Android devices, using both the simple on-device method and the advanced adb method for developers.
Part 1: The Recommended Method (On Your Device)
This is the fastest and easiest way to generate a complete bug report.
1. Enable Developer Options
First, enable the hidden Developer options menu on your phone:
Open your phone’s Settings app
Scroll down and tap “About phone”
Find “Build number” and tap it 7 times
You will see: “You are now a developer!”
2. Capture the Bug Report
It is best to capture the report immediately after the bug occurs.
Go back to Settings
Open Developer options (may be under System)
Tap “Take bug report”
Select “Full report” (strongly recommended)
Tap “Report”
3. Wait and Share
Your device will collect system data (may take a few minutes)
You will receive a notification: “Bug report captured”
Tap the notification
Share the generated .zip file via:
Google Drive (recommended)
Email
GitHub Issue attachment
Part 2: For Developers & Advanced Users (Using ADB)
This section is for users familiar with Android Debug Bridge (adb).
Capture a Bug Report Directly
If a device is connected with USB debugging enabled:
✔ Single Device:
Shell
adb bugreport C:\Reports\NexUsAIBugReports
✔ Multiple Devices:
Shell
adb devices

adb -s <device_serial_number> bugreport
Access Saved Bug Reports from Device
Android automatically stores recent reports.
1. List Reports:
Shell
adb shell ls /bugreports/
2. Download a Report:
Shell
adb pull /bugreports/<bug_report_filename.zip>
Understanding the Bug Report File
A bug report is a .zip archive containing system logs, crash reports, and diagnostics data.
The most important files help the NexUs AI team identify:
App crashes
Performance issues
System errors
Network problems
