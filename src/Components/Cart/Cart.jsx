/* eslint-disable react/prop-types */


const Cart = ({selectBlogs, totalCredit, remaining, totalPrice}) => {
    return (
        <div className="bg-white p-5 rounded-lg w-[320px">
            <h2 className="text-xl font-semibold text-blue-500 border-b-2 pb-5">Credit Hour Remaining {remaining} hr</h2>
            <h2 className="mt-5 text-xl font-bold pb-5">Course Name</h2>
            {
                selectBlogs.map(blog => (
                    <li key={blog.id} className="list-decimal">{blog.course_name}</li>
                ))
            }
            <div className="border-b-2 pb-5"></div>
            <div>
                <h2 className="text-lg font-medium text-zinc-700 py-5  border-b-2 pb-5">Total Credit Hour : {totalCredit}</h2>
            </div>
            <h3 className="text-lg font-medium text-zinc-700 py-5">Total Price : {totalPrice} USD</h3>
        </div>
    );
};

export default Cart;