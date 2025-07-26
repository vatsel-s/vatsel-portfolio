const sections = [
    {id: 'home', label: 'Home'}, 
    {id: 'experience', label: 'Experience'},
    {id: 'projects', label: 'Projects'},
    {id: 'skills', label: 'Skills'},
    {id: 'contact', label: 'Contact'},
    {id: 'resume', label: 'Resume/CV'}, 
]

export default function Sidenav() {
    return (
        <div className="">
            <ul>
                {sections.map((section) => (
                    <li key={section.id}>
                        <a href={`#${section.id}`}>{section.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}