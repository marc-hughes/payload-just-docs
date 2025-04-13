export function getBasePath(): string {
    return process.env.NODE_ENV === 'production' ? '/payload-just-docs' : '';
}

export function withBasePath(path: string): string {
    const basePath = getBasePath();
    // Remove any leading slash from the path to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
}

// For use with Next.js Link components
export function getLinkProps(href: string) {
    return {
        href: withBasePath(href),
    };
} 