/*
  Warnings:

  - The values [Pending,Complete] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `Is_Active` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Status_new" AS ENUM ('InProgress', 'Pause', 'Completed');
ALTER TABLE "public"."Task" ALTER COLUMN "Status" DROP DEFAULT;
ALTER TABLE "public"."Task" ALTER COLUMN "Status" TYPE "public"."Status_new" USING ("Status"::text::"public"."Status_new");
ALTER TYPE "public"."Status" RENAME TO "Status_old";
ALTER TYPE "public"."Status_new" RENAME TO "Status";
DROP TYPE "public"."Status_old";
ALTER TABLE "public"."Task" ALTER COLUMN "Status" SET DEFAULT 'InProgress';
COMMIT;

-- AlterTable
ALTER TABLE "public"."Note" ALTER COLUMN "Content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Task" ALTER COLUMN "Status" SET DEFAULT 'InProgress';

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "Is_Active" SET NOT NULL,
ALTER COLUMN "Is_Active" SET DEFAULT true;
