interface NullDataProps {
  title: String;
}

const NullData: React.FC<NullDataProps> = ({ title }) => {
  return(
    <div className="w-full h-[50] flex items-center justify-center text-xl md:text-2x1">
      <p className="font-medium">{title}</p>
    </div>
  )
}
export default NullData;