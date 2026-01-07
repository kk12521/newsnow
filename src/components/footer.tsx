export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-4 text-sm text-gray-500">
      {/* 如果你想保留 LICENSE 链接，可以加上 href */}
      <a href="/license" target="_blank" className="hover:underline">
        LICENSE
      </a>
      
      <span className="mt-1">
        KangNews © 2026 By aKang
      </span>
    </footer>
  )
}