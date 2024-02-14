import history from '/download2.jpg'
import whoweare from '/glasses2.jpg'
import whyweare from '/glasses4.jpg'

function Detail(){

    return(
        <div className="detail-outer">
            <div className="container">

                <div className="detail-inner">


                    <div className='history-of-us'>
                        <div className='history-of-us-text'>
                            <h2>History Of Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto necessitatibus aliquam voluptas! Sapiente quas recusandae eveniet dolore officia beatae nobis natus corrupti, facilis minus amet et autem accusamus, id eligendi? Ducimus voluptatum deleniti quia aperiam suscipit perspiciatis at neque modi ipsa aut, fugiat quis optio repellendus. Reprehenderit impedit beatae, consectetur quod deserunt corrupti ea, odio voluptate quia hic necessitatibus.</p>
                        </div>
                        <div className='history-of-us-image'>
                            <img src={history} />
                        </div>
                    </div>
                
                    <div className='who-we-are'>
                        <div className='who-we-are-image'>
                            <img src={whoweare} />
                        </div>
                        <div className='who-we-are-text'>
                            <h2>Who We Are</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto necessitatibus aliquam voluptas! Sapiente quas recusandae eveniet dolore officia beatae nobis natus corrupti, facilis minus amet et autem accusamus, id eligendi? Ducimus voluptatum deleniti quia aperiam suscipit perspiciatis at neque modi ipsa aut, fugiat quis optio repellendus. Reprehenderit impedit beatae, consectetur quod deserunt corrupti ea, odio voluptate quia hic necessitatibus.</p>
                        </div>
                    </div>

                    <div className='why-we-are'>
                        <div className='why-we-are-text'>
                            <h2>Why We Are</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto necessitatibus aliquam voluptas! Sapiente quas recusandae eveniet dolore officia beatae nobis natus corrupti, facilis minus amet et autem accusamus, id eligendi? Ducimus voluptatum deleniti quia aperiam suscipit perspiciatis at neque modi ipsa aut, fugiat quis optio repellendus. Reprehenderit impedit beatae, consectetur quod deserunt corrupti ea, odio voluptate quia hic necessitatibus.</p>
                        </div>
                        <div className='why-we-are-image'>
                            <img src={whyweare} />
                        </div>
                    </div>
                
                </div>                

            </div>
        </div>
    )
}

export default Detail