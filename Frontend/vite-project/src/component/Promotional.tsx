

export default function Promotional() {
    return (
        <div className="md:grid md:grid-cols-2 max-w-4xl bg-gray-300 m-8 md:mx-auto rounded-xl">
            <img src="https://tse1.mm.bing.net/th/id/OIP.pKopVfadNB3axQUAoC7CGQHaFI?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="promotional" className="hidden md:block w-full max-w-lg rounded-l-xl" />
            <div className="relative flex items-center justify-center">
               
                <div className="max-md:py-20 px-6 md:px-10 text-center">
                    <h1 className="text-3xl font-bold">
                        <span className="text-blue-600">Don’t miss out</span> on our discounted products.
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Don't miss out on amazing discounts—shop now before they're gone!
                    </p>
                    <button className="rounded-lg bg-blue-600 text-sm px-14 py-3 mt-4 text-white">
                        Check out the products
                    </button>
                    <button className="px-8 py-3 mt-4 text-sm text-gray-800">
                       Designed for high-volume, stable environments.
                    </button>
                </div>
            </div>
        </div>
    );
};