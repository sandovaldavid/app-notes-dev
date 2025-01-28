# 📝 Notes App

A modern, responsive notes application built with React and Material-UI that allows users to create, edit, and manage notes with a clean and intuitive interface.

[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-4.12.4-blue)](https://material-ui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🚀 Features

- ✨ Create, edit, and delete notes
- 🌗 Light/Dark mode toggle
- 📱 Responsive design for mobile, tablet, and desktop
- 🎯 Clean and intuitive user interface
- 🔄 Real-time updates
- 🚨 Error handling and notifications

## 🛠️ Tech Stack

- React.js
- Material-UI
- CSS3
- RESTful API

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or bun package manager
- Backend API running (default port: 4000)

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/sandovaldavid/app-notes-dev.git
cd app-notes-dev
```

1. Install dependencies:

```bash
npm install
# or
bun install
```

1. Create a `.env` file in the root directory:

```env
REACT_APP_BACKEND_URL=http://localhost:4000
PORT=5000
```

1. Start the development server:

```bash
npm start
# or
bun start
```

## 📦 Project Structure

``` note
src/
├── Componentes/           # React components
│   ├── Footer/
│   ├── Header/
│   ├── NewNotesForm/
│   └── Note/
├── hooks/                # Custom React hooks
├── App.js                # Main application component
└── index.js              # Application entry point
```

## 🔍 API Endpoints

| Method | Endpoint   | Description     |
|--------|------------|-----------------|
| GET    | /notes     | Fetch all notes |
| POST   | /notes     | Create new note |
| PUT    | /notes/:id | Update note     |
| DELETE | /notes/:id | Delete note     |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- GitHub: [@sandovaldavid](https://github.com/sandovaldavid)
- LinkedIn: [David Sandoval](https://linkedin.com/in/jdavidsandovals)

## 🙏 Acknowledgments

- Material-UI for the awesome component library
- React community for inspiration and support

---

<p align="center">Made by @sandovaldavid</p>
