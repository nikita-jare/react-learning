const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold m-2">Contact us</h1>
      <form className="p-2 m-2 w-3/4 shadow-lg border rounded justify-center">
        <p className="p-2 m-2">We would love to hear from you</p>
        <div className="p-2 m-2">
          <label className="p-2 m-2">Name</label>
          <input className="border shadow-lg" type="text" placeholder="Name" />
        </div>
        <div className="p-2 m-2">
          <label className="p-2 m-2">Email</label>
          <input className="border shadow-lg" type="email" />
        </div>
        <div className="p-2 m-2">
          <label className="p-2 m-2">Message</label>
          <textarea className="border shadow-lg" />
        </div>
        <div className="p-2 m-2">
          <button className="bg-purple-500 text-white p-2 m-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
