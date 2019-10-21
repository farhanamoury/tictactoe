import React, {Components} from 'react';
import Square from './Square';


class Board extends Components{
    renderSquare(i){
        return
            <Square value={this.props.squares[i]}  onclick ={()=> this.props.onclick(i)}/>
        
    }

    render() {
        return(
            <div>
                <div className ="broad-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className= "broad-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="broad-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );

    }
    

}