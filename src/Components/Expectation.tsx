import {FC} from 'react';
import "./ComponentsStyles/Expectation.scss";
import "./ComponentsStyles/ExpectationMediaQueries.scss";
import { IExpectation } from './interfaces/Expectation.interface';

const Expectation: FC<IExpectation> = ({author, content}) => {

    return (
        <div className="expectation">
            { author ? 
                (
                <div className='author-block'>
                    <span className="author">
                        {author}
                    </span>
                    <span className="underline" />
                </div>
                )
                : (<></>)
            }
            <div className="content-container">
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Expectation;