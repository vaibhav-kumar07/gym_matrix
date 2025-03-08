import { ToastProvider } from "@/components/hooks/use-toast";
import ".././globals.css";

export const metadata = {
    title: "Register | Login Authentication",
    description: "Register | Login Authentication",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ToastProvider />
                {children}
            </body>
        </html>
    );
}
