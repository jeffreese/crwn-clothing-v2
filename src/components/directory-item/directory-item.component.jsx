import { useNavigate } from "react-router-dom";

import {
  BackgroundImageContainer,
  BodyContainer,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <BodyContainer onClick={() => navigate(`shop/${title}`)}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
