import '../styles/componentsStyles/pagination.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Pagination = ({ totalOrders, currentPageNumber, setCurrentPageNumber }) => {

    const pageNumbers = [];
    const NO_OF_USERS_PER_PAGE = 10;


    for (let i = 1; i <= Math.ceil(totalOrders.length / NO_OF_USERS_PER_PAGE); i++) {
        pageNumbers.push(i);
    }

    const getPreviousPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber(currentPageNumber + -1)
        }
    }
    const getNextPage = () => {
        if (currentPageNumber < Math.ceil(totalOrders.length / NO_OF_USERS_PER_PAGE)) {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    }

    return (
        <div className='pagination'>
            <div className='nav-container' onClick={getPreviousPage}>
                <AiOutlineArrowLeft />
                <span style={{ 'marginLeft': 5 }}>Previous</span>
            </div>
            <div>
                {
                    pageNumbers.map((num) => {
                        return (
                            <button className={num === currentPageNumber ? 'active-pg' : 'not-active-pg'} key={`btn_${num}`} onClick={() => {
                                setCurrentPageNumber(num);
                            }}>{num}</button>
                        )

                    })
                }
            </div>

            <div className='nav-container' onClick={getNextPage}>
                <span style={{ 'marginRight': 5 }}>Next</span>
                <AiOutlineArrowRight />
            </div>

        </div >
    );
}

export default Pagination;