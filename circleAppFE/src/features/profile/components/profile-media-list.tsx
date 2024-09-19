import { Grid, Image, AspectRatio } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MediaList() {
  const medias = [
    "https://inging.s3.ap-southeast-1.amazonaws.com/website/subaru/brz/files/d79b441d444183971d327c03e022ef.jpg",
    "https://s7d1.scene7.com/is/image/scom/24_BRZ_hero_3?$1100j$",
    "https://jr-wheels.com/zdjecia/2023/06/28/406/05/Subaru_BRZ.jpg",
    "https://cdn0-production-images-kly.akamaized.net/umHbkqCQXhopfMJePIdcigsvQuc=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1246880/original/082708900_1464338611-brz.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaxbSWKLRStofCNDsNdiWzR5lK-B2NGfXgaOPHlaYpTDfy1CrX_MLIRmiMRQQSC5L3IRhizPJKM985CTNeMUXtfoWosG-LPNjO0HlRqNQjquvdTq8OUZfINWNl8Ghc7bk3LdUhWUT3uM-Q-pr9veQUB2pR34ldvrp8xv-UkGRHp8t_crlwRymm2eRuuENq/s976/subaru-brz-vs-subaru-wrx-lebih-praktis-vs-lebih-lincah.jpg",
    "https://www.cnet.com/a/img/resize/32933130116cd3081bec08972b93c48aaff196ab/hub/2018/09/14/fca2eb71-e901-4d85-9b38-159b10484b34/2019-subaru-brz-promo.jpg?auto=webp&width=1200",
  ];

  return (
    <Grid
      id="media"
      templateColumns={"repeat(3, 1fr)"}
      gap={1}
      padding={"8px 4px"}
    >
      {medias.map((media) => {
        return (
          <Link to={"/detail-image"}>
            <AspectRatio width={"100%"} ratio={1}>
              <Image src={media} rounded={4} objectFit="cover" />
            </AspectRatio>
          </Link>
        );
      })}
    </Grid>
  );
}
