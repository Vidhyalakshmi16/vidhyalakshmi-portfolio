export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#0B0D10]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Vidhyalakshmi
        </p>
      </div>
    </footer>
  );
}
