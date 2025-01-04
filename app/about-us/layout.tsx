export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <body>
            {children}
            &copy; Next JS is great~{" "}
        </body>
    );
}
