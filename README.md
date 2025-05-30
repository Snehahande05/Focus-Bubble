# Focus-Bubble
Focus Bubble

# Focus Bubble - Distraction Tracker

Focus Bubble is a web app designed to help users track their study focus and distractions in real time. It monitors how long you stay focused during a study session and detects when you switch browser tabs (distractions). The app visualizes your focus vs distraction time and reminds you to stay on track.

---

## Features

- **Study Timer:** Start, pause, and reset a timer that tracks your active study session duration.
- **Distraction Tracking:** Counts the number of times you switch browser tabs and the total time spent distracted.
- **Visual Focus Chart:** Displays a doughnut chart comparing focused time vs distraction time.
- **Popup Reminder:** Shows a notification with a sound alert after 3 distractions to encourage refocusing.
- **Mute/Unmute Alarm:** Option to toggle sound notifications.
- **Responsive Design:** Works well on mobile and desktop screens.

---

## How to Use

1. Click **Start** to begin your study session timer.
2. Use **Pause** to temporarily stop the timer, and **Resume** to continue.
3. Switch tabs or minimize the window — the app counts these as distractions.
4. After 3 distractions, a popup reminder will appear with an alarm sound (can be muted).
5. The chart updates live to show focus vs distraction time.
6. Click **Reset** to clear all data and start fresh.

---

## File Overview

- `index.html`  
  The main HTML structure includes the timer display, controls, distraction stats, chart, and popup.

- `labsession1.css`  
  Styling for the app with a clean, modern glassmorphism design and smooth animations. Responsive for smaller screens.

- `labsession1.js`  
  JavaScript logic handling timer counting, distraction detection, UI updates, audio alerts, and chart rendering using Chart.js.

- `Alert.mp3`  
  Sound file played as an alarm when distractions reach the threshold (make sure this file is in the project directory).

---

## Technologies Used

- HTML5 & CSS3 (Flexbox, animations, responsive design)
- Vanilla JavaScript (DOM manipulation, event handling, timers)
- [Chart.js](https://www.chartjs.org/) for data visualization

---

## Potential Improvements

- Add customizable distraction thresholds.
- Store session data in localStorage for persistence.
- Include more detailed analytics or export session reports.
- Integrate with productivity tools or Pomodoro timers.

---


<img width="1470" alt="Screenshot 2025-05-30 at 3 30 50 PM" src="https://github.com/user-attachments/assets/32806e7d-58a8-4f6b-84a7-e4798ff472ff" />
<img width="1470" alt="Screenshot 2025-05-30 at 3 31 04 PM" src="https://github.com/user-attachments/assets/c16ae120-5c48-43fa-b54d-10c060c5db44" />

