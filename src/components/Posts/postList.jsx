import React, { useMemo, useState } from 'react'
import Pagination from '../Pagination/pagination';
import PostItem from './postItem';
import '../mobile_media.css';

const PAGE_LIMIT = 12;
  const posts = [ 
  {
    key: 'post1',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post2',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post3',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post4',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post5',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post6',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post7',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post8',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post9',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post10',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post11',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post12',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post13',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post14',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post15',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post16',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post17',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post18',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post19',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post20',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post21',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post22',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post23',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post24',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post25',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post26',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post27',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post28',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post29',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post30',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
    {
    key: 'post31',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post32',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post33',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post34',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post35',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post36',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post37',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post38',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post39',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post40',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post41',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post42',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post43',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post44',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post45',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post46',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post47',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post48',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post49',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post50',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post51',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post52',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post53',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post54',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post55',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post56',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post57',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post58',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post59',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post60',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post61',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post62',
    icon: <img className="images" src="/images/Hospital_2.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post63',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
  {
    key: 'post64',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post65',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post66',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post67',
    icon: <img className="images" src="/images/Hospital_3.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post68',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post69',
    icon: <img className="images" src="/images/Hospital.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post70',
    icon: <img className="images" src="/images/Hospital_4.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post71',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: '',
  },
  {
    key: 'post72',
    icon: <img className="images" src="/images/Hospital_5.png" alt="none_photo" />,
    stars: <img className="stars" src="/images/5star.png" alt="none_photo" />,
  },
]
const PostList = () => {

  const [ activePage, setActivePage ] = useState(0);

  const { pagStart, pagEnd } = useMemo(() => {
    const pagStart = activePage * PAGE_LIMIT;
    const pagEnd = pagStart + PAGE_LIMIT;
    return {
        pagStart,
        pagEnd
    }
  }, [ activePage ]);

  return (
	<div className='postList'>
		{posts.slice( pagStart, pagEnd ).map((post) => (
		<PostItem {...post} />
		))}
    <Pagination pagStart={pagStart} pagEnd={pagEnd} activePage={activePage} onChange={setActivePage} />
	</div>
  )
}
export default PostList;
