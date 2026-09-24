type SeparatorProps = {
    className?: string;
};

const Separator = ({ className }: SeparatorProps) => {
    return <hr className={`text-neutral-800 ${className}`} />;
};

export default Separator;
