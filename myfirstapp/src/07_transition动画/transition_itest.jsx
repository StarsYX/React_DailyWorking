import { PureComponent } from "react";
import { TransitionGroup, CSSTransition} from "react-transition-group"
import "./transition_itest.css"

class TransItest  extends PureComponent {
    constructor() {
        super()

        this.state = {
            books: [
                {id:111, bookname: "火影忍者", price: 10},
                {id:222, bookname: "海贼王", price: 9},
                {id:333, bookname: "蜡笔小心", price: 3},
            ]
        }
    }

    addNewBook() {
        const books = [...this.state.books]
        books.push({id: new Date().getTime(),bookname: "七龙珠", price: 20})
        this.setState({ books})
    }

    removeBook(index) {
        const books = [...this.state.books]
        books.splice(index, 1)
        this.setState({ books})
    }

    render() {
        const { books } = this.state
        return (
            <div>
                <h2>动漫书籍列表</h2>
                <TransitionGroup component="ul">
                    {
                        books.map((item, index) => {
                            return (
                                <CSSTransition key={item.id} classNames="bookname" timeout={1000}>
                                    <li >
                                      <span>{item.bookname} - {item.price}</span>
                                      <button onClick={e => this.removeBook(index)}>删除</button>
                                    </li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={ e => this.addNewBook()}>添加新书籍</button>
            </div>
        )
    }
}

export default TransItest;