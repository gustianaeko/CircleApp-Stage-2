import { Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import OthersProfileItem from "../../profile/components/profile-other-item";
import { TabIndicatorCircle, TabItem } from "./followting-tab-circle";

export default function FollowsTabs() {
  return (
    <Tabs isFitted variant={"unstyled"}>
      <TabList borderBottom="1px solid" borderColor="brand.grey">
        <TabItem tabName="Followers" />
        <TabItem tabName="Following" />
      </TabList>
      <TabIndicatorCircle />
      <TabPanels>
        <TabPanel display={"flex"} flexDirection={"column"} gap={4}>
          <OthersProfileItem
            image="https://media.glamour.com/photos/5e6b972422a7990009a56a56/master/pass/TSDDARI_EC007.jpg"
            fullName="Michi"
            userName="@michiko"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Follow"
          />
          <OthersProfileItem
            image="https://www.slashfilm.com/img/gallery/15-best-90s-cartoons-ranked/intro-1682022296.jpg"
            fullName="Mikail"
            userName="@mikail"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Follow"
          />
          <OthersProfileItem
            image="https://inging.s3.ap-southeast-1.amazonaws.com/website/subaru/brz/files/207db1d61e4b0aa526f6d34f22dc1d.jpg"
            fullName="Cateez"
            userName="@cateez"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Following"
          />
          <OthersProfileItem
            image="https://png.pngtree.com/thumb_back/fh260/background/20230529/pngtree-the-character-danielle-in-the-anime-overwatch-image_2689006.jpg"
            fullName="Gaby"
            userName="@gaby"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Follow"
          />
          <OthersProfileItem
            image="https://img-cdn.hltv.org/gallerypicture/k1jRxe_FAGhQvIdfwVAJ4G.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=474&q=75&w=800&s=f378e2ec5bfbbf5ce3e234bed54f92a7"
            fullName="Nicolai"
            userName="@dev1ce"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Follow"
          />
        </TabPanel>
        <TabPanel display={"flex"} flexDirection={"column"} gap={4}>
          <OthersProfileItem
            image="https://inging.s3.ap-southeast-1.amazonaws.com/website/subaru/brz/files/207db1d61e4b0aa526f6d34f22dc1d.jpg"
            fullName="Cateez"
            userName="@cateez"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Following"
          />
          <OthersProfileItem
            image="https://inging.s3.ap-southeast-1.amazonaws.com/website/subaru/brz/files/207db1d61e4b0aa526f6d34f22dc1d.jpg"
            fullName="Cateez"
            userName="@cateez"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Following"
          />
          <OthersProfileItem
            image="https://inging.s3.ap-southeast-1.amazonaws.com/website/subaru/brz/files/207db1d61e4b0aa526f6d34f22dc1d.jpg"
            fullName="Cateez"
            userName="@cateez"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Following"
          />
          <OthersProfileItem
            image="https://inging.s3.ap-southeast-1.amazonaws.com/website/subaru/brz/files/207db1d61e4b0aa526f6d34f22dc1d.jpg"
            fullName="Cateez"
            userName="@cateez"
            bio="Berbagi momen tak terlupakan hari ini! Jangan lupa untuk selalu
            menghargai setiap langkah kecil dalam perjalanan hidup."
            isFollow="Following"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
