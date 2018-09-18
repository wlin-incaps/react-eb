import * as React from "react";
import Helmet from "react-helmet";
import * as ReactRedux from "react-redux";
import * as reactRouter from "react-router";
import { bindActionCreators, Store} from "redux";

import { fetchUsers } from "../reducers/reducers";

class Items extends React.Component<any, any> {
  public static fetchData(store: Store<any>, match: reactRouter.match<any>) {
    return store.dispatch(fetchUsers());
  }

  public constructor(props: any) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  public componentDidMount() {
    this.props.fetchUsers();
  }

  public render() {
    return (
      <div>
        <Helmet title="Items" />
        {this.props.items.map(this.renderItems)}
      </div>
    );
  }

  private renderItems(item: any) {
    return (
      <div key={item.id} >
        <span>{item.name}</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ fetchUsers }, dispatch);
const mapStateToProps = (state: any) => ({items: state.items});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Items);
