import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.components";
import CollectionsOverview from "./collections-overview.components";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

// this equivalent to the top one
// const CollectionsOverviewContainer = connect(mapStateToProps)(
// WithSpinner(CollectionsOverview)
// );

export default CollectionsOverviewContainer;
