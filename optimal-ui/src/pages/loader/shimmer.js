import './shimmer.css';
const ShimmerUI = () => {
    return (
        <div className="shimmer-container">
            <div className='shimmer-search'></div>
            {
                Array(15).fill().map((__, id) => {
                    return (
                        <div key={id} className="d-flex p-2 mt-4">
                            <div className='img-shimmer'></div>
                            <div className='ms-4'>
                                <div className='text-shimmer'></div>
                                <div className='text-shimmer mt-2'></div>
                                <div className='text-shimmer mt-2'></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ShimmerUI;