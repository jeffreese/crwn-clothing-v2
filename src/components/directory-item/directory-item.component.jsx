import { useNavigate } from "react-router-dom";

import {
  BackgroundImageContainer,
  BodyContainer,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <BodyContainer onClick={onNavigateHandler}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
