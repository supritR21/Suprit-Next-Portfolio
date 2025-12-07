# 1️⃣ Base Image
FROM node:20-alpine AS base

# 2️⃣ Set Working Directory
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install Dependencies
RUN npm install --legacy-peer-deps

# 5️⃣ Copy project files
COPY . .

# 6️⃣ Build Next.js App
RUN npm run build -- --webpack


# 7️⃣ Production Image
FROM node:20-alpine AS runner

WORKDIR /app

# 8️⃣ Copy only production files
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# 9️⃣ Expose Port
EXPOSE 10000

# 🔟 Start App
CMD ["npm", "start"]
