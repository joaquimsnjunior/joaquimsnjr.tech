import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-6 text-center">
        <pre className="font-mono text-blue-400 whitespace-pre">
          {`
       _             _            _           
   _  /\\ \\         / /\\       _  /\\ \\         
  /\\_\\\\ \\ \\       / /  \\     /\\_\\\\ \\ \\        
 / / / \\ \\ \\     / / /\\ \\   / / / \\ \\ \\       
/ / /   \\ \\ \\   / / /\\ \\ \\ / / /   \\ \\ \\      
\\ \\ \\____\\ \\ \\ /_/ /  \\ \\ \\\\ \\ \\____\\ \\ \\     
 \\ \\________\\ \\\\ \\ \\   \\ \\ \\\\ \\________\\ \\    
  \\/________/\\ \\\\ \\ \\   \\ \\ \\/________/\\ \\   
            \\ \\ \\\\ \\ \\___\\ \\ \\         \\ \\ \\  
             \\ \\_\\\\ \\/____\\ \\ \\         \\ \\_\\ 
              \\/_/ \\_________\\/          \\/_/ 
                                              
          `}
        </pre>
        <p className="text-gray-400">
          Não foi possível encontrar a página que você está procurando.
        </p>
        <Link
          href="/"
          className="inline-block text-gray-400 hover:text-blue-400 transition-colors"
        >
          voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}
