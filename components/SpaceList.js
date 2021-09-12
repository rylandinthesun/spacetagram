import SpaceCard from './SpaceCard';

const SpaceList = ({ context, handleAdd, handleRemove, icon }) => {
	return (
		<>
			{context.map((c, idx) => (
				<SpaceCard
					key={`${c.date}-${idx}`}
					url={c.url}
					media_type={c.media_type}
					thumbnail_url={c.thumbnail_url}
					title={c.title}
					date={c.date}
					explanation={c.explanation}
					handleAdd={handleAdd}
					handleRemove={handleRemove}
                    context={c}
                    liked={c.liked}         
				/>
			))}
		</>
	);
};

export default SpaceList;
