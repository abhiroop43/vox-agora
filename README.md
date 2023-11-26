# Vox Agora 🌐🗣️🎙️

VoxAgora is a platform for real-time chat, voice, and video conferences. The name VoxAgora is derived from "Vox" in Latin for "voice" and "Agora," an ancient Greek term for a public gathering place or marketplace, indicating a place for many voices to gather and converse.

## Features 🚀

- **Real-time Chat:** Engage in text-based conversations with other users.
- **Voice Calls:** Connect with others through high-quality voice calls.
- **Video Conferencing:** Seamlessly join video conferences for face-to-face communication.
- **Community Interaction:** Create a marketplace for diverse voices to come together.

## Technologies Used 💻

- [Next.js](https://nextjs.org/) - The React framework for server-rendered React applications.
- [shadcn/ui](https://ui.shadcn.com/) - The UI Library used for the frontend.
- [Clerk](https://clerk.com/) - For Authentication and User Management.
- [Prisma](https://www.prisma.io/) - ORM to work with the database.
- [MySQL](https://www.mysql.com/) - The database provider for the application.
- [uploadthing](https://uploadthing.com/) - For handling file and image uploads

## Getting Started 🛠️

In order to setup a development environment for Vox Agora, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/abhiroop43/vox-agora
    cd vox-agora

2. **Install dependencies:**

    ```bash
    npm install

3. **Create a .env file in the root of your project directory with your own values**

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    DATABASE_URL=
    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=
    ```

4. **Run the development server:**

    ```bash
    npm run dev

5. **Open Vox Agora in your browser**

    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Contributing 🤝

Please feel free to open a pull request or create an issue.
