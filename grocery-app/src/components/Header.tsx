type HeaderProps = {
    title: string;
    total_items: number;
};
function Header(props: HeaderProps) {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">{props.title}  Total items : {props.total_items}</h1>
        </header>
        );
}
export default Header;