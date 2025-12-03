import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Leaf, Award, Globe, Heart } from 'lucide-react';

const features = [
	{
		icon: Leaf,
		title: 'Single Origin',
		description: 'Sourced directly from heritage estates in Darjeeling, Assam, and beyond.',
	},
	{
		icon: Award,
		title: 'Small Batch',
		description: 'Handcrafted in limited quantities to ensure exceptional quality and freshness.',
	},
	{
		icon: Globe,
		title: 'Sustainable',
		description: 'Ethically sourced with fair trade practices and eco-friendly packaging.',
	},
	{
		icon: Heart,
		title: 'Artisan Craft',
		description: 'Traditional techniques perfected over generations of master tea makers.',
	},
];

export function About() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="about"
			className="section-padding bg-background relative overflow-hidden"
		>
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className="container mx-auto relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<span
						className={cn(
							'inline-block text-gold text-xs tracking-[0.3em] uppercase mb-4 transition-all duration-700',
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
						)}
					>
						Our Story
					</span>
					<h2
						className={cn(
							'font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 transition-all duration-700 delay-100',
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
						)}
					>
						Crafted for the
						<span className="text-gradient-gold"> Connoisseur</span>
					</h2>
					<p
						className={cn(
							'text-ivory-muted max-w-7xl mx-auto text-lg leading-relaxed transition-all duration-700 delay-200',
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
						)}
					>
						Tea Hub was born from a simple dream , to bring the true richness of Assam into every home. Growing up with the aroma of fresh chai, I learned that great tea is not just a drink, but a moment of comfort, a pause in a busy day, and a connection to something pure.
						With Tea Hub Strong Dust Tea, we honour that feeling. Every batch is carefully chosen from trusted Assam estates, refined with care, and packed to preserve its natural strength and aroma . My promise is simple , every cup you brew should feel warm, honest, and richly satisfying.

					</p>
				</div>

				{/* Features Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className={cn(
								'p-6 bg-card/50 border border-border/50 rounded-lg hover:border-gold/30 hover:bg-card transition-all duration-500 group',
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							)}
							style={{
								transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms',
							}}
						>
							<feature.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
							<h3 className="font-serif text-xl text-ivory mb-2">{feature.title}</h3>
							<p className="text-ivory-muted text-sm leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>

				{/* Mission Statement */}
				<div
					className={cn(
						'mt-20 text-center max-w-3xl mx-auto transition-all duration-700 delay-700',
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					)}
				>
					<blockquote className="font-serif text-2xl md:text-3xl text-ivory/80 italic leading-relaxed">
						"Every cup of TeaHub is a journey—from misty mountain gardens to your morning ritual.
						We don't just sell tea; we share an experience."
					</blockquote>
					<cite className="block mt-4 text-gold text-sm tracking-wide">
						— The TeaHub Philosophy
					</cite>
				</div>
			</div>
		</section>
	);
}
