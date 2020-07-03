import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    field: {
      marginBottom: spacing(2),
      position: 'relative',
      display: 'flex',
    },
    textField: {
      '& label': {
        backgroundColor: palette.common.white,
        color: palette.grey[100],
        display: 'block',
        fontWeight: 400,
        fontSize: '1.125rem',
        position: 'absolute',
        bottom: 14,
        left: 10,
        paddingLeft: spacing(0.75),
        paddingRight: spacing(0.75),
        transition:
          'transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1)',
        transitionProperty: 'color, bottom, transform',
        transformOrigin: 'bottom left',
      },
      '& input': {
        width: '100%',
        padding: spacing(2),
        display: 'flex',
        fontSize: '1.125rem',
        color: palette.common.black,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: palette.common.white,
        appearance: 'none',
        '&:focus': {
          outline: `#8c96a9 auto 1px`,
          '&+label': {
            color: palette.primary.main,
            transform: 'scale(.85) translateY(-33px)',
          },
        },
      },
      '&.valid': {
        '& input+label': {
          transform: 'scale(.85) translateY(-33px)',
        },
      },
    },
    '@keyframes splash': {
      '40%': {
        background: '#ff3366',
        boxShadow:
          '0 -18px 0 -8px #ff3366, 16px -8px 0 -8px #ff3366, 16px 8px 0 -8px #ff3366, 0 18px 0 -8px #ff3366, -16px 8px 0 -8px #ff3366, -16px -8px 0 -8px #ff3366',
      },
      '100%': {
        background: '#ff3366',
        boxShadow:
          '0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent',
      },
    },
    checkbox: {
      '& input': {
        appearance: 'none',
        cursor: 'pointer',
        margin: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        border: '2px solid #bfbfc0',
        borderRadius: '50%',
        '&:focus': {
          outline: 0,
        },
        '&:checked + span': {
          animation: '$splash 0.6s ease forwards',
        },
        '&:checked + span + label + svg path': {
          strokeDashoffset: 0,
        },
      },
      '& label': {
        paddingLeft: 35,
      },
      '& span': {
        width: 24,
        height: 24,
        background: 'none',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
        filter: 'url("#goo")',
        transform: 'translate3d(0, 0, 0)',
        pointerEvents: 'none',
      },
      '& svg': {
        position: 'absolute',
        top: 5,
        left: 4,
        zIndex: 1,
        pointerEvents: 'none',
        '& path': {
          stroke: '#fff',
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 19,
          strokeDashoffset: 19,
          transition: 'stroke-dashoffset 0.3s ease',
          transitionDelay: '0.2s',
        },
      },
    },
    fieldset: {
      padding: 0,
      margin: 0,
      border: 0,
      marginBottom: spacing(2),
    },
    error: {
      '& input': {
        outline: `red auto 1px`,
      },
      '& input:focus': {
        outline: `red auto 1px`,
        '&+label': {
          color: 'red',
        },
      },
    },
    srOnly: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'polygon(0 0,0 0,0 0)',
      height: '.0625rem',
      margin: '-.0625rem',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '.0625rem',
      whiteSpace: 'nowrap',
    },
  })
);
