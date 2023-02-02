export default function ContactForm() {
    return (
        <div class="grid-rows-3 border-gray-400 border-1 rounded m-4 p-4">
            <h2 class="m-3">Contact Form</h2>
            <form>
                <input type="text" class="shadow-lg rounded-sm m-3"></input>
                <button type="submit" class="transition ease-in-out duration-700 bg-indigo-500 text-white shadow rounded m-3 p-1 hover:bg-yellow-600 transform hover:-translate-y-1 hover:scale-110">Submit</button>
            </form>
        </div>
    );
}