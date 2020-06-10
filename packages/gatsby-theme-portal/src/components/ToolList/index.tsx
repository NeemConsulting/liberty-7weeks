import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Grid from '@material-ui/core/Grid';

import { ReactComponent as Comb } from '../../images/icons/comb.svg';
import { ReactComponent as Clip } from '../../images/icons/clip.svg';
import { ReactComponent as Wand } from '../../images/icons/wand.svg';
import { ReactComponent as Elastic } from '../../images/icons/elastic.svg';
import { ReactComponent as Dryer } from '../../images/icons/dryer.svg';
import { ReactComponent as Ironer } from '../../images/icons/ironer.svg';
import { ReactComponent as Pins } from '../../images/icons/pins.svg';

import useStyles from './styles';

const ToolList: FunctionComponent<ToolListInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Tools</h2>
      <Grid container spacing={2}>
        {data.map(tool => (
          <Grid className={classes.gridItem} item xs={3} key={tool.name}>
            {tool.image ? (
              <div>
                <Img fluid={tool.image.asset.fluid} alt={tool.image.alt} />
              </div>
            ) : (
              <div className={classes.icon}>
                {/* TODO: Dynamically call component based on toolname */}
                {tool.name.indexOf('Comb') >= 0 && <Comb />}
                {tool.name.indexOf('Clip') >= 0 && <Clip />}
                {tool.name.indexOf('Elastic') >= 0 && <Elastic />}
                {tool.name.indexOf('Dryer') >= 0 && <Dryer />}
                {tool.name.indexOf('Pins') >= 0 && <Pins />}
                {tool.name.indexOf('Ironer') >= 0 && <Ironer />}
                {tool.name.indexOf('Wand') >= 0 && <Wand />}
              </div>
            )}
            <h3 className={classes.gridItemCaption}>{tool.name}</h3>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

interface ToolListInterface {
  data: any;
}
export default ToolList;
