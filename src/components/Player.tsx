import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from '@chakra-ui/react';

import ReactHowler from 'react-howler';
import { useEffect, useState, useRef, useContext } from 'react';
import {
  IoMdShuffle,
  IoMdSkipBackward,
  IoMdSkipForward,
  IoMdPlayCircle,
  IoMdRepeat,
} from 'react-icons/io';
import { AiFillPauseCircle } from 'react-icons/ai';
import { SongContext } from '../contexts/SongContext';
import { formatTime } from '../../lib/formatter';

const Player = ({ activeSongs, activeSong }) => {
  const [playing, setPlaying] = useState(false);
  const [seek, setSeek] = useState(0.0);
  const [isSeeking, setIsSeeking] = useState(false);

  const [index, setIndex] = useState(0);
  const [repeat, setRepat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const soundRef = useRef(null);
  const repeatRef = useRef(repeat);

  const { setActiveSong } = useContext(SongContext);

  useEffect(() => {
    let timerId = null;

    if (playing && !isSeeking) {
      const f = () => {
        setSeek(soundRef.current.seek());
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);
      return () => {
        cancelAnimationFrame(timerId);
      };
    }

    cancelAnimationFrame(timerId);
  }, [playing, isSeeking]);

  useEffect(() => {
    setActiveSong(activeSongs[index]);
  }, [index, setActiveSong, activeSongs]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  const toggleSuffle = () => {
    setShuffle((state) => !state);
  };

  const toggleRepeat = () => {
    setRepat((state) => !state);
  };

  const togglePlaying = (val) => {
    setPlaying(val);
  };

  const prevSong = () => {
    if (index === 0) {
      setIndex(activeSongs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(0);
      soundRef.current.seek(0);
    } else {
      nextSong();
    }
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const nextSong = () => {
    setIndex((state: any) => {
      if (shuffle) {
        const next = Math.floor(Math.random() * activeSongs.length);

        if (next === state) {
          return nextSong();
        }
        return next;
      }

      return state === activeSongs.length - 1 ? 0 : state + 1;
    });
  };

  const onSeek = (e) => {
    setSeek(parseFloat(e[0]));
    soundRef.current.seek(e[0]);
  };

  return (
    <Box>
      <Box>
        {activeSong && (
          <ReactHowler
            playing={playing}
            src={activeSong?.url}
            ref={soundRef}
            onLoad={onLoad}
            onEnd={onEnd}
          />
        )}
      </Box>
      <Center>
        <ButtonGroup color='gray.800'>
          <IconButton
            aria-label='suffle'
            variant='link'
            bg='transparent'
            outline='none'
            fontSize='15px'
            color={shuffle ? '#fff' : 'gray.700'}
            onClick={toggleSuffle}
            icon={<IoMdShuffle />}
          />
          <IconButton
            onClick={() => prevSong()}
            aria-label='skip backward'
            variant='link'
            bg='transparent'
            outline='none'
            fontSize='15px'
            icon={<IoMdSkipBackward />}
          />

          {playing ? (
            <IconButton
              aria-label='suffle'
              variant='link'
              bg='transparent'
              outline='none'
              fontSize='33px'
              color='white'
              icon={<AiFillPauseCircle />}
              onClick={() => togglePlaying(false)}
            />
          ) : (
            <IconButton
              aria-label='suffle'
              variant='link'
              outline='none'
              fontSize='33px'
              color='white'
              icon={<IoMdPlayCircle />}
              onClick={() => togglePlaying(true)}
            />
          )}

          <IconButton
            onClick={() => nextSong()}
            aria-label='skip forward'
            variant='link'
            bg='transparent'
            outline='none'
            fontSize='15px'
            icon={<IoMdSkipForward />}
          />
          <IconButton
            aria-label='repeat'
            variant='link'
            bg='transparent'
            outline='none'
            fontSize='15px'
            color={repeat ? '#fff' : 'gray.700'}
            onClick={toggleRepeat}
            icon={<IoMdRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color='gray.600'>
        <Flex justify='center' align='center'>
          <Box width='10%' textAlign='left'>
            <Text fontSize='xs'>{formatTime(seek)}</Text>
          </Box>
          <Box marginTop='5px' width='80%'>
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              id='player-range'
              max={duration ? (duration.toFixed(2) as unknown as number) : 0}
              onChange={onSeek}
              value={[seek]}
              onChangeStart={() => setIsSeeking(true)}
              onChangeEnd={() => setIsSeeking(false)}
            >
              <RangeSliderTrack bg='gray.800'>
                <RangeSliderFilledTrack bg='gray.600' />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width='10%' textAlign='right'>
            <Text fontSize='xs'>{formatTime(duration)}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
