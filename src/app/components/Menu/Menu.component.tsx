
const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

export default function Menu() {
    return (
        <nav className="bg-white shadow">
            <ul className="flex space-x-6 px-4 py-2">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}