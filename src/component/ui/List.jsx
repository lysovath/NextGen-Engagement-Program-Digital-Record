

export default function List({ children }) {
    return (
        <ul className="space-y-4">
            {children}
        </ul>
    );
}

function Item(
    { 
        icon = <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>,
        children 
    }
) {
    return (
        <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
            {icon}
            {children}
        </li>
    );
}
List.Item = Item;