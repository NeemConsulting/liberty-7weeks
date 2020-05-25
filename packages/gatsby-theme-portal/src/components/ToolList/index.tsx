import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as Comb } from '../../images/icons/comb.svg';
import { ReactComponent as Clip } from '../../images/icons/clip.svg';
import { ReactComponent as Wand } from '../../images/icons/wand.svg';
import { ReactComponent as Elastic } from '../../images/icons/elastic.svg';
import { ReactComponent as Dryer } from '../../images/icons/dryer.svg';
import { ReactComponent as Ironer } from '../../images/icons/ironer.svg';
import { ReactComponent as Pins } from '../../images/icons/pins.svg';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 30,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 600,
    lineHeight: 1.1,
    position: 'relative',
    margin: 0,
    marginBottom: 30,
    '&:before': {
      content: '""',
      background: '#f8e6de',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    backgroundColor: '#f4f4f4',
    borderRadius: '50%',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      width: 50,
      height: 50,
    },
  },
  gridItemCaption: {
    fontSize: '.875rem',
    fontWeight: 600,
    lineHeight: 1.4,
    margin: 0,
    marginTop: 8,
    textAlign: 'center',
  },
}));

const ToolList: FunctionComponent<ToolListInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Tools</h2>
      <Grid container spacing={2}>
        {data.map(tool => (
          <Grid className={classes.gridItem} item xs={3} key={tool.toolName}>
            {tool.toolImage ? (
              <div>
                <Img
                  fluid={tool.toolImage.asset.fluid}
                  alt={tool.toolImage.alt}
                />
              </div>
            ) : (
              <div className={classes.icon}>
                {/* TODO: Dynamically call component based on toolname */}
                {tool.toolName.indexOf('Comb') >= 0 && <Comb />}
                {tool.toolName.indexOf('Clip') >= 0 && <Clip />}
                {tool.toolName.indexOf('Elastic') >= 0 && <Elastic />}
                {tool.toolName.indexOf('Dryer') >= 0 && <Dryer />}
                {tool.toolName.indexOf('Pins') >= 0 && <Pins />}
                {tool.toolName.indexOf('Ironer') >= 0 && <Ironer />}
                {tool.toolName.indexOf('Wand') >= 0 && <Wand />}
              </div>
            )}
            <h3 className={classes.gridItemCaption}>{tool.toolName}</h3>
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
