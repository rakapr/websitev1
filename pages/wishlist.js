import { useSelector, useDispatch } from "react-redux";
import {
  incrementwishQuantity,
  decrementwishQuantity,
  removeFromWish,
} from "../redux/wish.slice";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { addToCart } from "../redux/cart.slice";
import { addToWish } from "../redux/wish.slice";

let base_url_api = "https://cbe.apricart.pk/v1";

const Wishpage = () => {
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return wish.reduce(
      (accumulator, wish) => accumulator + wish.quantity * wish.currentPrice,
      0
    );
  };
  return (
    <div>
      {wish.length === 0 ? (
        <h1>Your Wish is Empty!</h1>
      ) : (
        <>
          <div className="container-fluid">
            <div className="popular_head">
              <h3>Wish List</h3>
            </div>
            <div>
              <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {wish.map((wish) => {
                  const { id, productImageUrl, title, currentPrice, sku } =
                    wish;
                  return (
                    <div className="col" key={id}>
                      <div className="p-3 border bg-light btnchan">
                        <div
                          className="heart"
                          onClick={() => dispatch(addToWish(wish))}
                        ></div>
                        <div className="pro_img">
                          <Link
                            href="/details/[id]"
                            as={"/details/" + wish.sku}
                            className="Link-CSS"
                            passHref
                          >
                            <img
                              src={base_url_api + productImageUrl}
                              className="img-fluid"
                              alt=""
                            />
                          </Link>
                          <h5>{title}</h5>
                          <h4>
                            Rs. <strong>{currentPrice}</strong>
                          </h4>
                          <div className="pro_btn1">
                            <select name="product" id="product">
                              <option value="1">1 KG</option>
                              <option value="2">2 KG</option>
                              <option value="3">3 KG</option>
                            </select>
                          </div>

                          {wish.inStock == true ? (
                            <div
                              className="pro_btn2"
                              onClick={() => dispatch(addToCart(wish))}
                            >
                              <a href="#" className="btn btn-primary chane">
                                Add to Cart
                              </a>
                            </div>
                          ) : (
                            <>
                              <div className="pro_btn2">
                                <a
                                  href="#"
                                  className="btn btn-secondary chane"
                                  disable
                                >
                                  Out of stock
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="removeList">
                <button onClick={() => dispatch(removeFromWish(wish.id))}>
                  Remove from list
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishpage;
