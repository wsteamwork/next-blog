import React, {Fragment} from 'react';
import {compose} from 'recompose';
import {withRouter, WithRouterProps} from 'next/router';
import {NextComponentType} from 'next';
import NavTop from '@/components/ToolBar/NavTop';
import {Parallax} from 'react-parallax';
import {ThemeCustom} from '@/components/Theme/Theme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import {Typography, Grid} from '@material-ui/core';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeRounded';
import PersonRounded from '@material-ui/icons/PersonRounded';
import SocialShare from '@/components/Button/SocialShare';
import GridContainer from '@/layouts/Grid/Container';
import {Facebook, Twitter, Google} from 'mdi-material-ui';
import SubscribeEmail from '@/components/Input/SubscribeEmail';
import CategoryTitle from '@/components/Bars/CategoryTitle';
import ChipCard from '@/components/Button/ChipCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IndexMainCard from '@/components/Cards/IndexMainCard';
import FormComment from '@/components/Input/FormComment';
import SocialShareContainer from '@/components/Bars/SocialShareContainer';
import {grey} from '@material-ui/core/colors';
import ParallaxPostCard from '@/components/Cards/ParallaxPostCard';
import ToTheTop from '@/components/Button/ToTheTop';
import NextSeo from 'next-seo';
import {useSpring, animated} from 'react-spring';
import LazyLoad from 'react-lazyload';

const styles: any = (theme: ThemeCustom) => createStyles({
  boxContent: {
    paddingTop: 40,
  },

});

interface IPostPage extends WithRouterProps, Partial<WithStyles<typeof styles>> {
  classes: any;
}

const PostPage: NextComponentType<IPostPage> = (props) => {
  const {classes} = props;
  const aniProps  = useSpring({
    opacity: 1,
    transform: 'translate3d(0px,0,0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0px,100px,0)',
    },
  });

  console.log(aniProps);

  return (
    <Fragment>
      <NavTop />
      <ToTheTop />
      <ParallaxPostCard />
      <GridContainer xs = {11} className = {classes.boxContent}>
        <Grid container spacing = {32}>
          <Grid item xs = {1}>
            <SocialShareContainer />
          </Grid>
          <Grid item xs = {8}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam delectus deserunt earum eos
            hic laborum maxime obcaecati placeat similique? Aliquid blanditiis, dolores est minus optio quae tenetur
            unde. Ad at doloribus esse eum explicabo fugiat laboriosam nobis perferendis, possimus quibusdam quis quod
            repellat reprehenderit sed sequi suscipit tempora temporibus veritatis? Aliquid aspernatur cumque earum hic,
            magni modi nesciunt obcaecati pariatur, porro quisquam repellat ut veritatis voluptas. Ad fuga, hic impedit
            laboriosam nam, natus, nesciunt nostrum numquam pariatur quae repudiandae tempora voluptate. Assumenda
            corporis dignissimos minima mollitia porro quaerat quisquam. Cumque ipsa laborum laudantium, nisi officia
            optio porro quibusdam quisquam soluta suscipit tempore voluptas voluptatum. Asperiores aspernatur autem
            blanditiis corporis deserunt dicta dolore dolorem dolorum, ducimus eius esse expedita hic illum incidunt
            ipsam iste laboriosam libero nam necessitatibus nemo, nesciunt nostrum nulla obcaecati odio officiis,
            pariatur qui quos ratione rem reprehenderit rerum sapiente sint sit temporibus unde voluptatem voluptatum. A
            ad adipisci aut beatae cum cumque, doloremque eligendi enim eveniet facere fugiat illum iure labore laborum
            laudantium magni modi, molestiae nam nisi numquam placeat possimus provident quisquam repellat suscipit unde
            vitae voluptate. Ad, aliquid amet assumenda deleniti dignissimos dolorem eaque ex id incidunt laboriosam
            magnam maiores praesentium quaerat sit tempore totam vel vitae voluptatum! Dignissimos libero minima
            molestias officiis velit. Autem eos iste, iure pariatur porro reiciendis sequi sit veritatis. Aliquam
            aspernatur at atque consequatur consequuntur cumque delectus deleniti dicta dolore dolorum esse ex ipsam
            necessitatibus neque, omnis placeat praesentium quaerat quidem recusandae repellendus sequi similique
            temporibus totam ullam unde velit voluptatem voluptatum! Ad assumenda dolor dolore dolorem facere hic, nemo
            nihil non quo sapiente sint ullam veniam, veritatis! Animi debitis distinctio iure quasi velit. Ab ad atque
            corporis cum deleniti distinctio dolorem dolores earum enim eos esse excepturi facere fuga fugit illo
            impedit ipsum iste, itaque labore laborum nam nesciunt nihil nobis nulla pariatur, perspiciatis placeat
            possimus quae quam quia quo repellendus saepe sed sint tempore vel voluptatibus. Eligendi, est, velit. A ab
            alias amet animi asperiores blanditiis consectetur dicta dolorem, eveniet excepturi exercitationem expedita
            explicabo facilis fugit magnam maxime modi nemo placeat possimus quae qui quibusdam quisquam quod, ratione
            reiciendis similique sint totam veniam veritatis vitae. Alias culpa ea eaque inventore molestias officia
            officiis praesentium, ratione recusandae saepe sint unde vel velit! Aperiam earum, eius. Aliquam ea et
            excepturi itaque mollitia numquam omnis quae unde? Ab accusantium aliquid asperiores blanditiis enim impedit
            incidunt, iusto nihil nobis pariatur unde ut velit. Animi blanditiis dolores earum nisi quisquam ratione rem
            saepe similique tempora, voluptatem? Animi corporis cupiditate dolorem earum error et id ipsam non,
            obcaecati pariatur soluta suscipit ut veniam. Corporis deleniti doloremque, ea enim excepturi fugit in neque
            qui, quisquam quo, quod quos unde voluptatibus. Accusamus aliquid atque consectetur deleniti dolor,
            doloribus eligendi hic inventore maxime minus nesciunt praesentium quia quo. Ad aliquid animi aperiam aut
            deserunt dolor fugit hic incidunt inventore minima neque non, obcaecati quae repudiandae veniam! Accusantium
            alias doloremque ea est ex non praesentium sunt? A dolore earum esse ex officia placeat quia quisquam
            recusandae soluta suscipit!
            <animated.div style = {aniProps}>
              <FormComment />
            </animated.div>
          </Grid>
          <Grid item xs = {3}>
            <CategoryTitle title = 'Đăng ký nhận tin' scale = 'small' />
            <SubscribeEmail />
          </Grid>
        </Grid>
      </GridContainer>
    </Fragment>
  );
};

export default compose(
  withRouter,
  withStyles(styles),
)(PostPage);
