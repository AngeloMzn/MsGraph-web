interface TittleProps {
    children: React.ReactNode;
}

export default function Tittle({ children }: TittleProps) {
    return (<>
        <header className="flex justify-center items-center pt-10">
            <h1 className="font-semibold text-4xl" >{children}</h1>
        </header>
    </>)
}