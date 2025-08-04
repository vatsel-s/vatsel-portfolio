const sections = [
    {id: 'home', label: 'Home'}, 
    {id: 'experience', label: 'Experience'},
    {id: 'projects', label: 'Projects'},
    {id: 'skills', label: 'Skills'}, 
]

export default function Sidenav() {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 p-4 flex items-center justify-center">
            <ul className="flex gap-6">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a href={`#${section.id}`} className="text-xl font-bold text-white hover:text-primary hover:underline">
                            {section.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}