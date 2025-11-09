"user client"

export default function StreamPage() {
    return <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {/* Display area for streaming text will go here */}

        <form>
            <div>
                <input placeholder="How can I help?" />
                <button>Send</button>
            </div>
        </form>
    </div>
}

