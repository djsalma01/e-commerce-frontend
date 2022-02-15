import bannerimg from '../images/under-amour-shoes-man4.jpg';
import { Link } from 'react-router-dom'

function BannerOneProduct() {
  return (
    <div class="h-80">

      <div class="bg-cover h-full " style={{ backgroundImage: `url(${bannerimg})` }}>
        <div className="h-full items-center lg:flex">
          <div className=" w-full lg:w-1/2 ">

            <div className=" text-left ml-4  " >
              <h1 className="text-2xl font-semibold text-white uppercase  lg:text-3xl">Best Place To Choose Your Clothes!</h1>
              <p className="mt-2 text-white">If you like quality sports Clothes and Equipment, This is your place</p>

              <div className=" text-center " >
              <button className="w-full px-3 py-2 mt-6 underline text-black hover:text-blue-800 visited:text-purple-600   bg-white rounded-md lg:w-auto ">
                <Link to="/shop">
                Shop Now
                </Link>

              </button>
              </div>

            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">


          </div>
        </div>
      </div>
    </div>
  )
};
export default BannerOneProduct;