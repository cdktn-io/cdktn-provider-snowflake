# `stageExternalAzure` Submodule <a name="`stageExternalAzure` Submodule" id="@cdktn/provider-snowflake.stageExternalAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StageExternalAzure <a name="StageExternalAzure" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure snowflake_stage_external_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzure(scope: Construct, id: string, config: StageExternalAzureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig">StageExternalAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig">StageExternalAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory">putDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat">putFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetStorageIntegration">resetStorageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetUsePrivatelinkEndpoint">resetUsePrivatelinkEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putCredentials"></a>

```typescript
public putCredentials(value: StageExternalAzureCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

---

##### `putDirectory` <a name="putDirectory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory"></a>

```typescript
public putDirectory(value: StageExternalAzureDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption"></a>

```typescript
public putEncryption(value: StageExternalAzureEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

---

##### `putFileFormat` <a name="putFileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat"></a>

```typescript
public putFileFormat(value: StageExternalAzureFileFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putFileFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts"></a>

```typescript
public putTimeouts(value: StageExternalAzureTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetFileFormat"></a>

```typescript
public resetFileFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStorageIntegration` <a name="resetStorageIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetStorageIntegration"></a>

```typescript
public resetStorageIntegration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsePrivatelinkEndpoint` <a name="resetUsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.resetUsePrivatelinkEndpoint"></a>

```typescript
public resetUsePrivatelinkEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StageExternalAzure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isConstruct"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

stageExternalAzure.StageExternalAzure.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformElement"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

stageExternalAzure.StageExternalAzure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformResource"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

stageExternalAzure.StageExternalAzure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

stageExternalAzure.StageExternalAzure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StageExternalAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StageExternalAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StageExternalAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StageExternalAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference">StageExternalAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList">StageExternalAzureDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference">StageExternalAzureDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference">StageExternalAzureEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference">StageExternalAzureFileFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList">StageExternalAzureShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.stageType">stageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference">StageExternalAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directoryInput">directoryInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormatInput">fileFormatInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegrationInput">storageIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpointInput">usePrivatelinkEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentials"></a>

```typescript
public readonly credentials: StageExternalAzureCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference">StageExternalAzureCredentialsOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.describeOutput"></a>

```typescript
public readonly describeOutput: StageExternalAzureDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList">StageExternalAzureDescribeOutputList</a>

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directory"></a>

```typescript
public readonly directory: StageExternalAzureDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference">StageExternalAzureDirectoryOutputReference</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryption"></a>

```typescript
public readonly encryption: StageExternalAzureEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference">StageExternalAzureEncryptionOutputReference</a>

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormat"></a>

```typescript
public readonly fileFormat: StageExternalAzureFileFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference">StageExternalAzureFileFormatOutputReference</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.showOutput"></a>

```typescript
public readonly showOutput: StageExternalAzureShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList">StageExternalAzureShowOutputList</a>

---

##### `stageType`<sup>Required</sup> <a name="stageType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.stageType"></a>

```typescript
public readonly stageType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeouts"></a>

```typescript
public readonly timeouts: StageExternalAzureTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference">StageExternalAzureTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: StageExternalAzureCredentials;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.directoryInput"></a>

```typescript
public readonly directoryInput: StageExternalAzureDirectory;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: StageExternalAzureEncryption;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: StageExternalAzureFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `storageIntegrationInput`<sup>Optional</sup> <a name="storageIntegrationInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegrationInput"></a>

```typescript
public readonly storageIntegrationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StageExternalAzureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usePrivatelinkEndpointInput`<sup>Optional</sup> <a name="usePrivatelinkEndpointInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpointInput"></a>

```typescript
public readonly usePrivatelinkEndpointInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StageExternalAzureConfig <a name="StageExternalAzureConfig" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureConfig: stageExternalAzure.StageExternalAzureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the stage; |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.url">url</a></code> | <code>string</code> | Specifies the URL for the Azure storage container (e.g., 'azure://account.blob.core.windows.net/container'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | credentials block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.directory">directory</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | directory block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | file_format block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#id StageExternalAzure#id}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for Azure storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#database StageExternalAzure#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the stage;

must be unique for the database and schema in which the stage is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#name StageExternalAzure#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the stage.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#schema StageExternalAzure#schema}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Specifies the URL for the Azure storage container (e.g., 'azure://account.blob.core.windows.net/container').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#url StageExternalAzure#url}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#comment StageExternalAzure#comment}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.credentials"></a>

```typescript
public readonly credentials: StageExternalAzureCredentials;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#credentials StageExternalAzure#credentials}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.directory"></a>

```typescript
public readonly directory: StageExternalAzureDirectory;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#directory StageExternalAzure#directory}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.encryption"></a>

```typescript
public readonly encryption: StageExternalAzureEncryption;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#encryption StageExternalAzure#encryption}

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.fileFormat"></a>

```typescript
public readonly fileFormat: StageExternalAzureFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

file_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#file_format StageExternalAzure#file_format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#id StageExternalAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageIntegration`<sup>Optional</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

Specifies the name of the storage integration used to delegate authentication responsibility to a Snowflake identity.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#storage_integration StageExternalAzure#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StageExternalAzureTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#timeouts StageExternalAzure#timeouts}

---

##### `usePrivatelinkEndpoint`<sup>Optional</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureConfig.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use a private link endpoint for Azure storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#use_privatelink_endpoint StageExternalAzure#use_privatelink_endpoint}

---

### StageExternalAzureCredentials <a name="StageExternalAzureCredentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureCredentials: stageExternalAzure.StageExternalAzureCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials.property.azureSasToken">azureSasToken</a></code> | <code>string</code> | Specifies the shared access signature (SAS) token for Azure. |

---

##### `azureSasToken`<sup>Required</sup> <a name="azureSasToken" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials.property.azureSasToken"></a>

```typescript
public readonly azureSasToken: string;
```

- *Type:* string

Specifies the shared access signature (SAS) token for Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#azure_sas_token StageExternalAzure#azure_sas_token}

---

### StageExternalAzureDescribeOutput <a name="StageExternalAzureDescribeOutput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutput: stageExternalAzure.StageExternalAzureDescribeOutput = { ... }
```


### StageExternalAzureDescribeOutputDirectoryTable <a name="StageExternalAzureDescribeOutputDirectoryTable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputDirectoryTable: stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable = { ... }
```


### StageExternalAzureDescribeOutputFileFormat <a name="StageExternalAzureDescribeOutputFileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormat: stageExternalAzure.StageExternalAzureDescribeOutputFileFormat = { ... }
```


### StageExternalAzureDescribeOutputFileFormatAvro <a name="StageExternalAzureDescribeOutputFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormatAvro: stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro = { ... }
```


### StageExternalAzureDescribeOutputFileFormatCsv <a name="StageExternalAzureDescribeOutputFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormatCsv: stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv = { ... }
```


### StageExternalAzureDescribeOutputFileFormatJson <a name="StageExternalAzureDescribeOutputFileFormatJson" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormatJson: stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson = { ... }
```


### StageExternalAzureDescribeOutputFileFormatOrc <a name="StageExternalAzureDescribeOutputFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormatOrc: stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc = { ... }
```


### StageExternalAzureDescribeOutputFileFormatParquet <a name="StageExternalAzureDescribeOutputFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormatParquet: stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet = { ... }
```


### StageExternalAzureDescribeOutputFileFormatXml <a name="StageExternalAzureDescribeOutputFileFormatXml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDescribeOutputFileFormatXml: stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml = { ... }
```


### StageExternalAzureDirectory <a name="StageExternalAzureDirectory" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureDirectory: stageExternalAzure.StageExternalAzureDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to enable a directory table on the external stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.notificationIntegration">notificationIntegration</a></code> | <code>string</code> | Specifies the name of the notification integration used to automatically refresh the directory table metadata. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.refreshOnCreate">refreshOnCreate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to enable a directory table on the external stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#enable StageExternalAzure#enable}

---

##### `autoRefresh`<sup>Optional</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should enable triggering automatic refreshes of the directory table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#auto_refresh StageExternalAzure#auto_refresh}

---

##### `notificationIntegration`<sup>Optional</sup> <a name="notificationIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.notificationIntegration"></a>

```typescript
public readonly notificationIntegration: string;
```

- *Type:* string

Specifies the name of the notification integration used to automatically refresh the directory table metadata.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#notification_integration StageExternalAzure#notification_integration}

---

##### `refreshOnCreate`<sup>Optional</sup> <a name="refreshOnCreate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory.property.refreshOnCreate"></a>

```typescript
public readonly refreshOnCreate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically refresh the directory table metadata once, immediately after the stage is created.This field is used only when creating the object. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#refresh_on_create StageExternalAzure#refresh_on_create}

---

### StageExternalAzureEncryption <a name="StageExternalAzureEncryption" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureEncryption: stageExternalAzure.StageExternalAzureEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.azureCse">azureCse</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a></code> | azure_cse block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.none">none</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a></code> | none block. |

---

##### `azureCse`<sup>Optional</sup> <a name="azureCse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.azureCse"></a>

```typescript
public readonly azureCse: StageExternalAzureEncryptionAzureCse;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

azure_cse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#azure_cse StageExternalAzure#azure_cse}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption.property.none"></a>

```typescript
public readonly none: StageExternalAzureEncryptionNone;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#none StageExternalAzure#none}

---

### StageExternalAzureEncryptionAzureCse <a name="StageExternalAzureEncryptionAzureCse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureEncryptionAzureCse: stageExternalAzure.StageExternalAzureEncryptionAzureCse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse.property.masterKey">masterKey</a></code> | <code>string</code> | Specifies the 128-bit or 256-bit client-side master key. |

---

##### `masterKey`<sup>Required</sup> <a name="masterKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse.property.masterKey"></a>

```typescript
public readonly masterKey: string;
```

- *Type:* string

Specifies the 128-bit or 256-bit client-side master key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#master_key StageExternalAzure#master_key}

---

### StageExternalAzureEncryptionNone <a name="StageExternalAzureEncryptionNone" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureEncryptionNone: stageExternalAzure.StageExternalAzureEncryptionNone = { ... }
```


### StageExternalAzureFileFormat <a name="StageExternalAzureFileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormat: stageExternalAzure.StageExternalAzureFileFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.formatName">formatName</a></code> | <code>string</code> | Fully qualified name of the file format (e.g., 'database.schema.format_name'). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a></code> | json block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a></code> | orc block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a></code> | parquet block. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a></code> | xml block. |

---

##### `avro`<sup>Optional</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.avro"></a>

```typescript
public readonly avro: StageExternalAzureFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#avro StageExternalAzure#avro}

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.csv"></a>

```typescript
public readonly csv: StageExternalAzureFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#csv StageExternalAzure#csv}

---

##### `formatName`<sup>Optional</sup> <a name="formatName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

Fully qualified name of the file format (e.g., 'database.schema.format_name').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#format_name StageExternalAzure#format_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.json"></a>

```typescript
public readonly json: StageExternalAzureFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#json StageExternalAzure#json}

---

##### `orc`<sup>Optional</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.orc"></a>

```typescript
public readonly orc: StageExternalAzureFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

orc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#orc StageExternalAzure#orc}

---

##### `parquet`<sup>Optional</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.parquet"></a>

```typescript
public readonly parquet: StageExternalAzureFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

parquet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#parquet StageExternalAzure#parquet}

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat.property.xml"></a>

```typescript
public readonly xml: StageExternalAzureFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

xml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#xml StageExternalAzure#xml}

---

### StageExternalAzureFileFormatAvro <a name="StageExternalAzureFileFormatAvro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormatAvro: stageExternalAzure.StageExternalAzureFileFormatAvro = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. Valid values: `AUTO` \| `GZIP` \| `BROTLI` \| `ZSTD` \| `DEFLATE` \| `RAW_DEFLATE` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format. Valid values: `AUTO` | `GZIP` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatCsv <a name="StageExternalAzureFileFormatCsv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormatCsv: stageExternalAzure.StageExternalAzureFileFormatCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.dateFormat">dateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.encoding">encoding</a></code> | <code>string</code> | Specifies the character set of the source data when loading data into a table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escape">escape</a></code> | <code>string</code> | Single character string used as the escape character for field values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | Single character string used as the escape character for unenclosed field values only. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | One or more singlebyte or multibyte characters that separate fields in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | Character used to enclose strings. Use `NONE` to specify no enclosure character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fileExtension">fileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.multiLine">multiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.parseHeader">parseHeader</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | One or more singlebyte or multibyte characters that separate records in an input file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipBlankLines">skipBlankLines</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipHeader">skipHeader</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timeFormat">timeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#binary_format StageExternalAzure#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#date_format StageExternalAzure#date_format}

---

##### `emptyFieldAsNull`<sup>Optional</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to insert SQL NULL for empty fields in an input file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#empty_field_as_null StageExternalAzure#empty_field_as_null}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Specifies the character set of the source data when loading data into a table.

Valid values: `BIG5` | `EUCJP` | `EUCKR` | `GB18030` | `IBM420` | `IBM424` | `ISO2022CN` | `ISO2022JP` | `ISO2022KR` | `ISO88591` | `ISO88592` | `ISO88595` | `ISO88596` | `ISO88597` | `ISO88598` | `ISO88599` | `ISO885915` | `KOI8R` | `SHIFTJIS` | `UTF8` | `UTF16` | `UTF16BE` | `UTF16LE` | `UTF32` | `UTF32BE` | `UTF32LE` | `WINDOWS1250` | `WINDOWS1251` | `WINDOWS1252` | `WINDOWS1253` | `WINDOWS1254` | `WINDOWS1255` | `WINDOWS1256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#encoding StageExternalAzure#encoding}

---

##### `errorOnColumnCountMismatch`<sup>Optional</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to generate a parsing error if the number of delimited columns in an input file does not match the number of columns in the corresponding table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#error_on_column_count_mismatch StageExternalAzure#error_on_column_count_mismatch}

---

##### `escape`<sup>Optional</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

Single character string used as the escape character for field values.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#escape StageExternalAzure#escape}

---

##### `escapeUnenclosedField`<sup>Optional</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

Single character string used as the escape character for unenclosed field values only.

Use `NONE` to specify no escape character. NOTE: This value may be not imported properly from Snowflake. Snowflake returns escaped values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#escape_unenclosed_field StageExternalAzure#escape_unenclosed_field}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

One or more singlebyte or multibyte characters that separate fields in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#field_delimiter StageExternalAzure#field_delimiter}

---

##### `fieldOptionallyEnclosedBy`<sup>Optional</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

Character used to enclose strings. Use `NONE` to specify no enclosure character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#field_optionally_enclosed_by StageExternalAzure#field_optionally_enclosed_by}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#file_extension StageExternalAzure#file_extension}

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to parse CSV files containing multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#multi_line StageExternalAzure#multi_line}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `parseHeader`<sup>Optional</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.parseHeader"></a>

```typescript
public readonly parseHeader: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use the first row headers in the data files to determine column names.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#parse_header StageExternalAzure#parse_header}

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

One or more singlebyte or multibyte characters that separate records in an input file.

Use `NONE` to specify no delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#record_delimiter StageExternalAzure#record_delimiter}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `skipBlankLines`<sup>Optional</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies to skip any blank lines encountered in the data files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#skip_blank_lines StageExternalAzure#skip_blank_lines}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

##### `skipHeader`<sup>Optional</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of lines at the start of the file to skip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#skip_header StageExternalAzure#skip_header}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#time_format StageExternalAzure#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#timestamp_format StageExternalAzure#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatJson <a name="StageExternalAzureFileFormatJson" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormatJson: stageExternalAzure.StageExternalAzureFileFormatJson = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.allowDuplicate">allowDuplicate</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved). |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | Defines the encoding format for binary input or output. Valid values: `HEX` \| `BASE64` \| `UTF8`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.dateFormat">dateFormat</a></code> | <code>string</code> | Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.enableOctal">enableOctal</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.fileExtension">fileExtension</a></code> | <code>string</code> | Specifies the extension for files unloaded to a stage. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.multiLine">multiLine</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripNullValues">stripNullValues</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripOuterArray">stripOuterArray</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timeFormat">timeFormat</a></code> | <code>string</code> | Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `allowDuplicate`<sup>Optional</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow duplicate object field names (only the last one will be preserved).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#allow_duplicate StageExternalAzure#allow_duplicate}

---

##### `binaryFormat`<sup>Optional</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

Defines the encoding format for binary input or output. Valid values: `HEX` | `BASE64` | `UTF8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#binary_format StageExternalAzure#binary_format}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

Defines the format of date values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#date_format StageExternalAzure#date_format}

---

##### `enableOctal`<sup>Optional</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.enableOctal"></a>

```typescript
public readonly enableOctal: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that enables parsing of octal numbers.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#enable_octal StageExternalAzure#enable_octal}

---

##### `fileExtension`<sup>Optional</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

Specifies the extension for files unloaded to a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#file_extension StageExternalAzure#file_extension}

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#ignore_utf8_errors StageExternalAzure#ignore_utf8_errors}

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to allow multiple records on a single line.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#multi_line StageExternalAzure#multi_line}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

##### `stripNullValues`<sup>Optional</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove object fields or array elements containing null values.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#strip_null_values StageExternalAzure#strip_null_values}

---

##### `stripOuterArray`<sup>Optional</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that instructs the JSON parser to remove outer brackets.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#strip_outer_array StageExternalAzure#strip_outer_array}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

Defines the format of time values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#time_format StageExternalAzure#time_format}

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Defines the format of timestamp values in the data files. Use `AUTO` to have Snowflake auto-detect the format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#timestamp_format StageExternalAzure#timestamp_format}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatOrc <a name="StageExternalAzureFileFormatOrc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormatOrc: stageExternalAzure.StageExternalAzureFileFormatOrc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

### StageExternalAzureFileFormatParquet <a name="StageExternalAzureFileFormatParquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormatParquet: stageExternalAzure.StageExternalAzureFileFormatParquet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.binaryAsText">binaryAsText</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. Valid values: `AUTO` \| `LZO` \| `SNAPPY` \| `NONE`. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.nullIf">nullIf</a></code> | <code>string[]</code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.trimSpace">trimSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useLogicalType">useLogicalType</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files. |

---

##### `binaryAsText`<sup>Optional</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#binary_as_text StageExternalAzure#binary_as_text}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format. Valid values: `AUTO` | `LZO` | `SNAPPY` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#null_if StageExternalAzure#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#trim_space StageExternalAzure#trim_space}

---

##### `useLogicalType`<sup>Optional</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use Parquet logical types when loading data.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#use_logical_type StageExternalAzure#use_logical_type}

---

##### `useVectorizedScanner`<sup>Optional</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to use a vectorized scanner for loading Parquet files.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#use_vectorized_scanner StageExternalAzure#use_vectorized_scanner}

---

### StageExternalAzureFileFormatXml <a name="StageExternalAzureFileFormatXml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureFileFormatXml: stageExternalAzure.StageExternalAzureFileFormatXml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.compression">compression</a></code> | <code>string</code> | Specifies the compression format. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.disableAutoConvert">disableAutoConvert</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.preserveSpace">preserveSpace</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.stripOuterElement">stripOuterElement</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents. |

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Specifies the compression format.

Valid values: `AUTO` | `GZIP` | `BZ2` | `BROTLI` | `ZSTD` | `DEFLATE` | `RAW_DEFLATE` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#compression StageExternalAzure#compression}

---

##### `disableAutoConvert`<sup>Optional</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to native representation.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#disable_auto_convert StageExternalAzure#disable_auto_convert}

---

##### `ignoreUtf8Errors`<sup>Optional</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether UTF-8 encoding errors produce error conditions.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#ignore_utf8_errors StageExternalAzure#ignore_utf8_errors}

---

##### `preserveSpace`<sup>Optional</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#preserve_space StageExternalAzure#preserve_space}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#replace_invalid_characters StageExternalAzure#replace_invalid_characters}

---

##### `skipByteOrderMark`<sup>Optional</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to skip the BOM (byte order mark) if present in a data file.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#skip_byte_order_mark StageExternalAzure#skip_byte_order_mark}

---

##### `stripOuterElement`<sup>Optional</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate documents.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#strip_outer_element StageExternalAzure#strip_outer_element}

---

### StageExternalAzureShowOutput <a name="StageExternalAzureShowOutput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureShowOutput: stageExternalAzure.StageExternalAzureShowOutput = { ... }
```


### StageExternalAzureTimeouts <a name="StageExternalAzureTimeouts" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

const stageExternalAzureTimeouts: stageExternalAzure.StageExternalAzureTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#create StageExternalAzure#create}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#delete StageExternalAzure#delete}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#read StageExternalAzure#read}. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#update StageExternalAzure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#create StageExternalAzure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#delete StageExternalAzure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#read StageExternalAzure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/stage_external_azure#update StageExternalAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StageExternalAzureCredentialsOutputReference <a name="StageExternalAzureCredentialsOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasTokenInput">azureSasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasToken">azureSasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureSasTokenInput`<sup>Optional</sup> <a name="azureSasTokenInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasTokenInput"></a>

```typescript
public readonly azureSasTokenInput: string;
```

- *Type:* string

---

##### `azureSasToken`<sup>Required</sup> <a name="azureSasToken" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.azureSasToken"></a>

```typescript
public readonly azureSasToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureCredentials;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureCredentials">StageExternalAzureCredentials</a>

---


### StageExternalAzureDescribeOutputDirectoryTableList <a name="StageExternalAzureDescribeOutputDirectoryTableList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputDirectoryTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputDirectoryTableOutputReference <a name="StageExternalAzureDescribeOutputDirectoryTableOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.enable">enable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.lastRefreshedOn">lastRefreshedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable">StageExternalAzureDescribeOutputDirectoryTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lastRefreshedOn`<sup>Required</sup> <a name="lastRefreshedOn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.lastRefreshedOn"></a>

```typescript
public readonly lastRefreshedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputDirectoryTable;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTable">StageExternalAzureDescribeOutputDirectoryTable</a>

---


### StageExternalAzureDescribeOutputFileFormatAvroList <a name="StageExternalAzureDescribeOutputFileFormatAvroList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatAvroOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatAvroOutputReference <a name="StageExternalAzureDescribeOutputFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro">StageExternalAzureDescribeOutputFileFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvro">StageExternalAzureDescribeOutputFileFormatAvro</a>

---


### StageExternalAzureDescribeOutputFileFormatCsvList <a name="StageExternalAzureDescribeOutputFileFormatCsvList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatCsvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatCsvOutputReference <a name="StageExternalAzureDescribeOutputFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.parseHeader">parseHeader</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.validateUtf8">validateUtf8</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv">StageExternalAzureDescribeOutputFileFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.parseHeader"></a>

```typescript
public readonly parseHeader: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validateUtf8`<sup>Required</sup> <a name="validateUtf8" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.validateUtf8"></a>

```typescript
public readonly validateUtf8: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsv">StageExternalAzureDescribeOutputFileFormatCsv</a>

---


### StageExternalAzureDescribeOutputFileFormatJsonList <a name="StageExternalAzureDescribeOutputFileFormatJsonList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatJsonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatJsonOutputReference <a name="StageExternalAzureDescribeOutputFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.enableOctal">enableOctal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.multiLine">multiLine</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson">StageExternalAzureDescribeOutputFileFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJson">StageExternalAzureDescribeOutputFileFormatJson</a>

---


### StageExternalAzureDescribeOutputFileFormatList <a name="StageExternalAzureDescribeOutputFileFormatList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatOrcList <a name="StageExternalAzureDescribeOutputFileFormatOrcList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatOrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatOrcOutputReference <a name="StageExternalAzureDescribeOutputFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc">StageExternalAzureDescribeOutputFileFormatOrc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrc">StageExternalAzureDescribeOutputFileFormatOrc</a>

---


### StageExternalAzureDescribeOutputFileFormatOutputReference <a name="StageExternalAzureDescribeOutputFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList">StageExternalAzureDescribeOutputFileFormatAvroList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList">StageExternalAzureDescribeOutputFileFormatCsvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.formatName">formatName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList">StageExternalAzureDescribeOutputFileFormatJsonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList">StageExternalAzureDescribeOutputFileFormatOrcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList">StageExternalAzureDescribeOutputFileFormatParquetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList">StageExternalAzureDescribeOutputFileFormatXmlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat">StageExternalAzureDescribeOutputFileFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: StageExternalAzureDescribeOutputFileFormatAvroList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatAvroList">StageExternalAzureDescribeOutputFileFormatAvroList</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: StageExternalAzureDescribeOutputFileFormatCsvList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatCsvList">StageExternalAzureDescribeOutputFileFormatCsvList</a>

---

##### `formatName`<sup>Required</sup> <a name="formatName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.json"></a>

```typescript
public readonly json: StageExternalAzureDescribeOutputFileFormatJsonList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatJsonList">StageExternalAzureDescribeOutputFileFormatJsonList</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.orc"></a>

```typescript
public readonly orc: StageExternalAzureDescribeOutputFileFormatOrcList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOrcList">StageExternalAzureDescribeOutputFileFormatOrcList</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: StageExternalAzureDescribeOutputFileFormatParquetList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList">StageExternalAzureDescribeOutputFileFormatParquetList</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.xml"></a>

```typescript
public readonly xml: StageExternalAzureDescribeOutputFileFormatXmlList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList">StageExternalAzureDescribeOutputFileFormatXmlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormat">StageExternalAzureDescribeOutputFileFormat</a>

---


### StageExternalAzureDescribeOutputFileFormatParquetList <a name="StageExternalAzureDescribeOutputFileFormatParquetList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatParquetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatParquetOutputReference <a name="StageExternalAzureDescribeOutputFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.trimSpace">trimSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet">StageExternalAzureDescribeOutputFileFormatParquet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatParquet">StageExternalAzureDescribeOutputFileFormatParquet</a>

---


### StageExternalAzureDescribeOutputFileFormatXmlList <a name="StageExternalAzureDescribeOutputFileFormatXmlList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputFileFormatXmlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputFileFormatXmlOutputReference <a name="StageExternalAzureDescribeOutputFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml">StageExternalAzureDescribeOutputFileFormatXml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXmlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutputFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatXml">StageExternalAzureDescribeOutputFileFormatXml</a>

---


### StageExternalAzureDescribeOutputList <a name="StageExternalAzureDescribeOutputList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.get"></a>

```typescript
public get(index: number): StageExternalAzureDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureDescribeOutputOutputReference <a name="StageExternalAzureDescribeOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.directoryTable">directoryTable</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList">StageExternalAzureDescribeOutputDirectoryTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fileFormat">fileFormat</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList">StageExternalAzureDescribeOutputFileFormatList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput">StageExternalAzureDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryTable`<sup>Required</sup> <a name="directoryTable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.directoryTable"></a>

```typescript
public readonly directoryTable: StageExternalAzureDescribeOutputDirectoryTableList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputDirectoryTableList">StageExternalAzureDescribeOutputDirectoryTableList</a>

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.fileFormat"></a>

```typescript
public readonly fileFormat: StageExternalAzureDescribeOutputFileFormatList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputFileFormatList">StageExternalAzureDescribeOutputFileFormatList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDescribeOutput">StageExternalAzureDescribeOutput</a>

---


### StageExternalAzureDirectoryOutputReference <a name="StageExternalAzureDirectoryOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetAutoRefresh">resetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetNotificationIntegration">resetNotificationIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetRefreshOnCreate">resetRefreshOnCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRefresh` <a name="resetAutoRefresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetAutoRefresh"></a>

```typescript
public resetAutoRefresh(): void
```

##### `resetNotificationIntegration` <a name="resetNotificationIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetNotificationIntegration"></a>

```typescript
public resetNotificationIntegration(): void
```

##### `resetRefreshOnCreate` <a name="resetRefreshOnCreate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.resetRefreshOnCreate"></a>

```typescript
public resetRefreshOnCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefreshInput">autoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegrationInput">notificationIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreateInput">refreshOnCreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegration">notificationIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreate">refreshOnCreate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshInput`<sup>Optional</sup> <a name="autoRefreshInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefreshInput"></a>

```typescript
public readonly autoRefreshInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationIntegrationInput`<sup>Optional</sup> <a name="notificationIntegrationInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegrationInput"></a>

```typescript
public readonly notificationIntegrationInput: string;
```

- *Type:* string

---

##### `refreshOnCreateInput`<sup>Optional</sup> <a name="refreshOnCreateInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreateInput"></a>

```typescript
public readonly refreshOnCreateInput: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationIntegration`<sup>Required</sup> <a name="notificationIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.notificationIntegration"></a>

```typescript
public readonly notificationIntegration: string;
```

- *Type:* string

---

##### `refreshOnCreate`<sup>Required</sup> <a name="refreshOnCreate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.refreshOnCreate"></a>

```typescript
public readonly refreshOnCreate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureDirectory;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureDirectory">StageExternalAzureDirectory</a>

---


### StageExternalAzureEncryptionAzureCseOutputReference <a name="StageExternalAzureEncryptionAzureCseOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKeyInput">masterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKey">masterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterKeyInput`<sup>Optional</sup> <a name="masterKeyInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKeyInput"></a>

```typescript
public readonly masterKeyInput: string;
```

- *Type:* string

---

##### `masterKey`<sup>Required</sup> <a name="masterKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.masterKey"></a>

```typescript
public readonly masterKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureEncryptionAzureCse;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

---


### StageExternalAzureEncryptionNoneOutputReference <a name="StageExternalAzureEncryptionNoneOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureEncryptionNone;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

---


### StageExternalAzureEncryptionOutputReference <a name="StageExternalAzureEncryptionOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putAzureCse">putAzureCse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putNone">putNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetAzureCse">resetAzureCse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureCse` <a name="putAzureCse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putAzureCse"></a>

```typescript
public putAzureCse(value: StageExternalAzureEncryptionAzureCse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putAzureCse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

---

##### `putNone` <a name="putNone" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putNone"></a>

```typescript
public putNone(value: StageExternalAzureEncryptionNone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.putNone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

---

##### `resetAzureCse` <a name="resetAzureCse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetAzureCse"></a>

```typescript
public resetAzureCse(): void
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCse">azureCse</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference">StageExternalAzureEncryptionAzureCseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.none">none</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference">StageExternalAzureEncryptionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCseInput">azureCseInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.noneInput">noneInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureCse`<sup>Required</sup> <a name="azureCse" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCse"></a>

```typescript
public readonly azureCse: StageExternalAzureEncryptionAzureCseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCseOutputReference">StageExternalAzureEncryptionAzureCseOutputReference</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.none"></a>

```typescript
public readonly none: StageExternalAzureEncryptionNoneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNoneOutputReference">StageExternalAzureEncryptionNoneOutputReference</a>

---

##### `azureCseInput`<sup>Optional</sup> <a name="azureCseInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.azureCseInput"></a>

```typescript
public readonly azureCseInput: StageExternalAzureEncryptionAzureCse;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionAzureCse">StageExternalAzureEncryptionAzureCse</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: StageExternalAzureEncryptionNone;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionNone">StageExternalAzureEncryptionNone</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureEncryption;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureEncryption">StageExternalAzureEncryption</a>

---


### StageExternalAzureFileFormatAvroOutputReference <a name="StageExternalAzureFileFormatAvroOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

---


### StageExternalAzureFileFormatCsvOutputReference <a name="StageExternalAzureFileFormatCsvOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetBinaryFormat">resetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEmptyFieldAsNull">resetEmptyFieldAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch">resetErrorOnColumnCountMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscape">resetEscape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscapeUnenclosedField">resetEscapeUnenclosedField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy">resetFieldOptionallyEnclosedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFileExtension">resetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetMultiLine">resetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetParseHeader">resetParseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetRecordDelimiter">resetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipBlankLines">resetSkipBlankLines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipHeader">resetSkipHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetEmptyFieldAsNull` <a name="resetEmptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEmptyFieldAsNull"></a>

```typescript
public resetEmptyFieldAsNull(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetErrorOnColumnCountMismatch` <a name="resetErrorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetErrorOnColumnCountMismatch"></a>

```typescript
public resetErrorOnColumnCountMismatch(): void
```

##### `resetEscape` <a name="resetEscape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscape"></a>

```typescript
public resetEscape(): void
```

##### `resetEscapeUnenclosedField` <a name="resetEscapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetEscapeUnenclosedField"></a>

```typescript
public resetEscapeUnenclosedField(): void
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetFieldOptionallyEnclosedBy` <a name="resetFieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFieldOptionallyEnclosedBy"></a>

```typescript
public resetFieldOptionallyEnclosedBy(): void
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetFileExtension"></a>

```typescript
public resetFileExtension(): void
```

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetMultiLine"></a>

```typescript
public resetMultiLine(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetParseHeader` <a name="resetParseHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetParseHeader"></a>

```typescript
public resetParseHeader(): void
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetRecordDelimiter"></a>

```typescript
public resetRecordDelimiter(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipBlankLines` <a name="resetSkipBlankLines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipBlankLines"></a>

```typescript
public resetSkipBlankLines(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetSkipHeader` <a name="resetSkipHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetSkipHeader"></a>

```typescript
public resetSkipHeader(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormatInput">binaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNullInput">emptyFieldAsNullInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput">errorOnColumnCountMismatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeInput">escapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput">escapeUnenclosedFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput">fieldOptionallyEnclosedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtensionInput">fileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLineInput">multiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeaderInput">parseHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLinesInput">skipBlankLinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeaderInput">skipHeaderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNull">emptyFieldAsNull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatch">errorOnColumnCountMismatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escape">escape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedField">escapeUnenclosedField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy">fieldOptionallyEnclosedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLine">multiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeader">parseHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLines">skipBlankLines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeader">skipHeader</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormatInput"></a>

```typescript
public readonly binaryFormatInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `emptyFieldAsNullInput`<sup>Optional</sup> <a name="emptyFieldAsNullInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNullInput"></a>

```typescript
public readonly emptyFieldAsNullInput: string;
```

- *Type:* string

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatchInput`<sup>Optional</sup> <a name="errorOnColumnCountMismatchInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatchInput"></a>

```typescript
public readonly errorOnColumnCountMismatchInput: string;
```

- *Type:* string

---

##### `escapeInput`<sup>Optional</sup> <a name="escapeInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeInput"></a>

```typescript
public readonly escapeInput: string;
```

- *Type:* string

---

##### `escapeUnenclosedFieldInput`<sup>Optional</sup> <a name="escapeUnenclosedFieldInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedFieldInput"></a>

```typescript
public readonly escapeUnenclosedFieldInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedByInput`<sup>Optional</sup> <a name="fieldOptionallyEnclosedByInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedByInput"></a>

```typescript
public readonly fieldOptionallyEnclosedByInput: string;
```

- *Type:* string

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtensionInput"></a>

```typescript
public readonly fileExtensionInput: string;
```

- *Type:* string

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLineInput"></a>

```typescript
public readonly multiLineInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `parseHeaderInput`<sup>Optional</sup> <a name="parseHeaderInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeaderInput"></a>

```typescript
public readonly parseHeaderInput: string;
```

- *Type:* string

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiterInput"></a>

```typescript
public readonly recordDelimiterInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `skipBlankLinesInput`<sup>Optional</sup> <a name="skipBlankLinesInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLinesInput"></a>

```typescript
public readonly skipBlankLinesInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `skipHeaderInput`<sup>Optional</sup> <a name="skipHeaderInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeaderInput"></a>

```typescript
public readonly skipHeaderInput: number;
```

- *Type:* number

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `emptyFieldAsNull`<sup>Required</sup> <a name="emptyFieldAsNull" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.emptyFieldAsNull"></a>

```typescript
public readonly emptyFieldAsNull: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `errorOnColumnCountMismatch`<sup>Required</sup> <a name="errorOnColumnCountMismatch" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.errorOnColumnCountMismatch"></a>

```typescript
public readonly errorOnColumnCountMismatch: string;
```

- *Type:* string

---

##### `escape`<sup>Required</sup> <a name="escape" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escape"></a>

```typescript
public readonly escape: string;
```

- *Type:* string

---

##### `escapeUnenclosedField`<sup>Required</sup> <a name="escapeUnenclosedField" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.escapeUnenclosedField"></a>

```typescript
public readonly escapeUnenclosedField: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldOptionallyEnclosedBy`<sup>Required</sup> <a name="fieldOptionallyEnclosedBy" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fieldOptionallyEnclosedBy"></a>

```typescript
public readonly fieldOptionallyEnclosedBy: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `parseHeader`<sup>Required</sup> <a name="parseHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.parseHeader"></a>

```typescript
public readonly parseHeader: string;
```

- *Type:* string

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `skipBlankLines`<sup>Required</sup> <a name="skipBlankLines" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipBlankLines"></a>

```typescript
public readonly skipBlankLines: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `skipHeader`<sup>Required</sup> <a name="skipHeader" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.skipHeader"></a>

```typescript
public readonly skipHeader: number;
```

- *Type:* number

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

---


### StageExternalAzureFileFormatJsonOutputReference <a name="StageExternalAzureFileFormatJsonOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetAllowDuplicate">resetAllowDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetBinaryFormat">resetBinaryFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetEnableOctal">resetEnableOctal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetFileExtension">resetFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetIgnoreUtf8Errors">resetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetMultiLine">resetMultiLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripNullValues">resetStripNullValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripOuterArray">resetStripOuterArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowDuplicate` <a name="resetAllowDuplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetAllowDuplicate"></a>

```typescript
public resetAllowDuplicate(): void
```

##### `resetBinaryFormat` <a name="resetBinaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetBinaryFormat"></a>

```typescript
public resetBinaryFormat(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetEnableOctal` <a name="resetEnableOctal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetEnableOctal"></a>

```typescript
public resetEnableOctal(): void
```

##### `resetFileExtension` <a name="resetFileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetFileExtension"></a>

```typescript
public resetFileExtension(): void
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors(): void
```

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetMultiLine"></a>

```typescript
public resetMultiLine(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetStripNullValues` <a name="resetStripNullValues" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripNullValues"></a>

```typescript
public resetStripNullValues(): void
```

##### `resetStripOuterArray` <a name="resetStripOuterArray" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetStripOuterArray"></a>

```typescript
public resetStripOuterArray(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicateInput">allowDuplicateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormatInput">binaryFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctalInput">enableOctalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtensionInput">fileExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLineInput">multiLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValuesInput">stripNullValuesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArrayInput">stripOuterArrayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicate">allowDuplicate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormat">binaryFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctal">enableOctal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtension">fileExtension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLine">multiLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValues">stripNullValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArray">stripOuterArray</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowDuplicateInput`<sup>Optional</sup> <a name="allowDuplicateInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicateInput"></a>

```typescript
public readonly allowDuplicateInput: string;
```

- *Type:* string

---

##### `binaryFormatInput`<sup>Optional</sup> <a name="binaryFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormatInput"></a>

```typescript
public readonly binaryFormatInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `enableOctalInput`<sup>Optional</sup> <a name="enableOctalInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctalInput"></a>

```typescript
public readonly enableOctalInput: string;
```

- *Type:* string

---

##### `fileExtensionInput`<sup>Optional</sup> <a name="fileExtensionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtensionInput"></a>

```typescript
public readonly fileExtensionInput: string;
```

- *Type:* string

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8ErrorsInput"></a>

```typescript
public readonly ignoreUtf8ErrorsInput: string;
```

- *Type:* string

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLineInput"></a>

```typescript
public readonly multiLineInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `stripNullValuesInput`<sup>Optional</sup> <a name="stripNullValuesInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValuesInput"></a>

```typescript
public readonly stripNullValuesInput: string;
```

- *Type:* string

---

##### `stripOuterArrayInput`<sup>Optional</sup> <a name="stripOuterArrayInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArrayInput"></a>

```typescript
public readonly stripOuterArrayInput: string;
```

- *Type:* string

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `allowDuplicate`<sup>Required</sup> <a name="allowDuplicate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.allowDuplicate"></a>

```typescript
public readonly allowDuplicate: string;
```

- *Type:* string

---

##### `binaryFormat`<sup>Required</sup> <a name="binaryFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.binaryFormat"></a>

```typescript
public readonly binaryFormat: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `enableOctal`<sup>Required</sup> <a name="enableOctal" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.enableOctal"></a>

```typescript
public readonly enableOctal: string;
```

- *Type:* string

---

##### `fileExtension`<sup>Required</sup> <a name="fileExtension" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.fileExtension"></a>

```typescript
public readonly fileExtension: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.multiLine"></a>

```typescript
public readonly multiLine: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `stripNullValues`<sup>Required</sup> <a name="stripNullValues" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripNullValues"></a>

```typescript
public readonly stripNullValues: string;
```

- *Type:* string

---

##### `stripOuterArray`<sup>Required</sup> <a name="stripOuterArray" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.stripOuterArray"></a>

```typescript
public readonly stripOuterArray: string;
```

- *Type:* string

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

---


### StageExternalAzureFileFormatOrcOutputReference <a name="StageExternalAzureFileFormatOrcOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

---


### StageExternalAzureFileFormatOutputReference <a name="StageExternalAzureFileFormatOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro">putAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc">putOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet">putParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml">putXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetAvro">resetAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetFormatName">resetFormatName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetJson">resetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetOrc">resetOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetParquet">resetParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetXml">resetXml</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvro` <a name="putAvro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro"></a>

```typescript
public putAvro(value: StageExternalAzureFileFormatAvro): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

---

##### `putCsv` <a name="putCsv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv"></a>

```typescript
public putCsv(value: StageExternalAzureFileFormatCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

---

##### `putJson` <a name="putJson" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson"></a>

```typescript
public putJson(value: StageExternalAzureFileFormatJson): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

---

##### `putOrc` <a name="putOrc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc"></a>

```typescript
public putOrc(value: StageExternalAzureFileFormatOrc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putOrc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

---

##### `putParquet` <a name="putParquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet"></a>

```typescript
public putParquet(value: StageExternalAzureFileFormatParquet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putParquet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

---

##### `putXml` <a name="putXml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml"></a>

```typescript
public putXml(value: StageExternalAzureFileFormatXml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.putXml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

---

##### `resetAvro` <a name="resetAvro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetAvro"></a>

```typescript
public resetAvro(): void
```

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```

##### `resetFormatName` <a name="resetFormatName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetFormatName"></a>

```typescript
public resetFormatName(): void
```

##### `resetJson` <a name="resetJson" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetJson"></a>

```typescript
public resetJson(): void
```

##### `resetOrc` <a name="resetOrc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetOrc"></a>

```typescript
public resetOrc(): void
```

##### `resetParquet` <a name="resetParquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetParquet"></a>

```typescript
public resetParquet(): void
```

##### `resetXml` <a name="resetXml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.resetXml"></a>

```typescript
public resetXml(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avro">avro</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference">StageExternalAzureFileFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference">StageExternalAzureFileFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference">StageExternalAzureFileFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orc">orc</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference">StageExternalAzureFileFormatOrcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquet">parquet</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference">StageExternalAzureFileFormatParquetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xml">xml</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference">StageExternalAzureFileFormatXmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avroInput">avroInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csvInput">csvInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatNameInput">formatNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.jsonInput">jsonInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orcInput">orcInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquetInput">parquetInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xmlInput">xmlInput</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatName">formatName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avro`<sup>Required</sup> <a name="avro" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avro"></a>

```typescript
public readonly avro: StageExternalAzureFileFormatAvroOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvroOutputReference">StageExternalAzureFileFormatAvroOutputReference</a>

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csv"></a>

```typescript
public readonly csv: StageExternalAzureFileFormatCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsvOutputReference">StageExternalAzureFileFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.json"></a>

```typescript
public readonly json: StageExternalAzureFileFormatJsonOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJsonOutputReference">StageExternalAzureFileFormatJsonOutputReference</a>

---

##### `orc`<sup>Required</sup> <a name="orc" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orc"></a>

```typescript
public readonly orc: StageExternalAzureFileFormatOrcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrcOutputReference">StageExternalAzureFileFormatOrcOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquet"></a>

```typescript
public readonly parquet: StageExternalAzureFileFormatParquetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference">StageExternalAzureFileFormatParquetOutputReference</a>

---

##### `xml`<sup>Required</sup> <a name="xml" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xml"></a>

```typescript
public readonly xml: StageExternalAzureFileFormatXmlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference">StageExternalAzureFileFormatXmlOutputReference</a>

---

##### `avroInput`<sup>Optional</sup> <a name="avroInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.avroInput"></a>

```typescript
public readonly avroInput: StageExternalAzureFileFormatAvro;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatAvro">StageExternalAzureFileFormatAvro</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: StageExternalAzureFileFormatCsv;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatCsv">StageExternalAzureFileFormatCsv</a>

---

##### `formatNameInput`<sup>Optional</sup> <a name="formatNameInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatNameInput"></a>

```typescript
public readonly formatNameInput: string;
```

- *Type:* string

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.jsonInput"></a>

```typescript
public readonly jsonInput: StageExternalAzureFileFormatJson;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatJson">StageExternalAzureFileFormatJson</a>

---

##### `orcInput`<sup>Optional</sup> <a name="orcInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.orcInput"></a>

```typescript
public readonly orcInput: StageExternalAzureFileFormatOrc;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOrc">StageExternalAzureFileFormatOrc</a>

---

##### `parquetInput`<sup>Optional</sup> <a name="parquetInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.parquetInput"></a>

```typescript
public readonly parquetInput: StageExternalAzureFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

---

##### `xmlInput`<sup>Optional</sup> <a name="xmlInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.xmlInput"></a>

```typescript
public readonly xmlInput: StageExternalAzureFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

---

##### `formatName`<sup>Required</sup> <a name="formatName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.formatName"></a>

```typescript
public readonly formatName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormat;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormat">StageExternalAzureFileFormat</a>

---


### StageExternalAzureFileFormatParquetOutputReference <a name="StageExternalAzureFileFormatParquetOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetBinaryAsText">resetBinaryAsText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseLogicalType">resetUseLogicalType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseVectorizedScanner">resetUseVectorizedScanner</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBinaryAsText` <a name="resetBinaryAsText" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetBinaryAsText"></a>

```typescript
public resetBinaryAsText(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetNullIf"></a>

```typescript
public resetNullIf(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetTrimSpace"></a>

```typescript
public resetTrimSpace(): void
```

##### `resetUseLogicalType` <a name="resetUseLogicalType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseLogicalType"></a>

```typescript
public resetUseLogicalType(): void
```

##### `resetUseVectorizedScanner` <a name="resetUseVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.resetUseVectorizedScanner"></a>

```typescript
public resetUseVectorizedScanner(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsTextInput">binaryAsTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIfInput">nullIfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpaceInput">trimSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalTypeInput">useLogicalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScannerInput">useVectorizedScannerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsText">binaryAsText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIf">nullIf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpace">trimSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalType">useLogicalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScanner">useVectorizedScanner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryAsTextInput`<sup>Optional</sup> <a name="binaryAsTextInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsTextInput"></a>

```typescript
public readonly binaryAsTextInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIfInput"></a>

```typescript
public readonly nullIfInput: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpaceInput"></a>

```typescript
public readonly trimSpaceInput: string;
```

- *Type:* string

---

##### `useLogicalTypeInput`<sup>Optional</sup> <a name="useLogicalTypeInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalTypeInput"></a>

```typescript
public readonly useLogicalTypeInput: string;
```

- *Type:* string

---

##### `useVectorizedScannerInput`<sup>Optional</sup> <a name="useVectorizedScannerInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScannerInput"></a>

```typescript
public readonly useVectorizedScannerInput: string;
```

- *Type:* string

---

##### `binaryAsText`<sup>Required</sup> <a name="binaryAsText" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.binaryAsText"></a>

```typescript
public readonly binaryAsText: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.nullIf"></a>

```typescript
public readonly nullIf: string[];
```

- *Type:* string[]

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.trimSpace"></a>

```typescript
public readonly trimSpace: string;
```

- *Type:* string

---

##### `useLogicalType`<sup>Required</sup> <a name="useLogicalType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useLogicalType"></a>

```typescript
public readonly useLogicalType: string;
```

- *Type:* string

---

##### `useVectorizedScanner`<sup>Required</sup> <a name="useVectorizedScanner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.useVectorizedScanner"></a>

```typescript
public readonly useVectorizedScanner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormatParquet;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatParquet">StageExternalAzureFileFormatParquet</a>

---


### StageExternalAzureFileFormatXmlOutputReference <a name="StageExternalAzureFileFormatXmlOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetDisableAutoConvert">resetDisableAutoConvert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetIgnoreUtf8Errors">resetIgnoreUtf8Errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetPreserveSpace">resetPreserveSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetSkipByteOrderMark">resetSkipByteOrderMark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetStripOuterElement">resetStripOuterElement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetDisableAutoConvert` <a name="resetDisableAutoConvert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetDisableAutoConvert"></a>

```typescript
public resetDisableAutoConvert(): void
```

##### `resetIgnoreUtf8Errors` <a name="resetIgnoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetIgnoreUtf8Errors"></a>

```typescript
public resetIgnoreUtf8Errors(): void
```

##### `resetPreserveSpace` <a name="resetPreserveSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetPreserveSpace"></a>

```typescript
public resetPreserveSpace(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetSkipByteOrderMark` <a name="resetSkipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetSkipByteOrderMark"></a>

```typescript
public resetSkipByteOrderMark(): void
```

##### `resetStripOuterElement` <a name="resetStripOuterElement" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.resetStripOuterElement"></a>

```typescript
public resetStripOuterElement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvertInput">disableAutoConvertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput">ignoreUtf8ErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpaceInput">preserveSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMarkInput">skipByteOrderMarkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElementInput">stripOuterElementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvert">disableAutoConvert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8Errors">ignoreUtf8Errors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpace">preserveSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMark">skipByteOrderMark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElement">stripOuterElement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `disableAutoConvertInput`<sup>Optional</sup> <a name="disableAutoConvertInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvertInput"></a>

```typescript
public readonly disableAutoConvertInput: string;
```

- *Type:* string

---

##### `ignoreUtf8ErrorsInput`<sup>Optional</sup> <a name="ignoreUtf8ErrorsInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8ErrorsInput"></a>

```typescript
public readonly ignoreUtf8ErrorsInput: string;
```

- *Type:* string

---

##### `preserveSpaceInput`<sup>Optional</sup> <a name="preserveSpaceInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpaceInput"></a>

```typescript
public readonly preserveSpaceInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: string;
```

- *Type:* string

---

##### `skipByteOrderMarkInput`<sup>Optional</sup> <a name="skipByteOrderMarkInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMarkInput"></a>

```typescript
public readonly skipByteOrderMarkInput: string;
```

- *Type:* string

---

##### `stripOuterElementInput`<sup>Optional</sup> <a name="stripOuterElementInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElementInput"></a>

```typescript
public readonly stripOuterElementInput: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `disableAutoConvert`<sup>Required</sup> <a name="disableAutoConvert" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.disableAutoConvert"></a>

```typescript
public readonly disableAutoConvert: string;
```

- *Type:* string

---

##### `ignoreUtf8Errors`<sup>Required</sup> <a name="ignoreUtf8Errors" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.ignoreUtf8Errors"></a>

```typescript
public readonly ignoreUtf8Errors: string;
```

- *Type:* string

---

##### `preserveSpace`<sup>Required</sup> <a name="preserveSpace" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.preserveSpace"></a>

```typescript
public readonly preserveSpace: string;
```

- *Type:* string

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: string;
```

- *Type:* string

---

##### `skipByteOrderMark`<sup>Required</sup> <a name="skipByteOrderMark" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.skipByteOrderMark"></a>

```typescript
public readonly skipByteOrderMark: string;
```

- *Type:* string

---

##### `stripOuterElement`<sup>Required</sup> <a name="stripOuterElement" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.stripOuterElement"></a>

```typescript
public readonly stripOuterElement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXmlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureFileFormatXml;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureFileFormatXml">StageExternalAzureFileFormatXml</a>

---


### StageExternalAzureShowOutputList <a name="StageExternalAzureShowOutputList" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.get"></a>

```typescript
public get(index: number): StageExternalAzureShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StageExternalAzureShowOutputOutputReference <a name="StageExternalAzureShowOutputOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.directoryEnabled">directoryEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasCredentials">hasCredentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasEncryptionKey">hasEncryptionKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput">StageExternalAzureShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `directoryEnabled`<sup>Required</sup> <a name="directoryEnabled" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.directoryEnabled"></a>

```typescript
public readonly directoryEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `hasCredentials`<sup>Required</sup> <a name="hasCredentials" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasCredentials"></a>

```typescript
public readonly hasCredentials: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `hasEncryptionKey`<sup>Required</sup> <a name="hasEncryptionKey" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.hasEncryptionKey"></a>

```typescript
public readonly hasEncryptionKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StageExternalAzureShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureShowOutput">StageExternalAzureShowOutput</a>

---


### StageExternalAzureTimeoutsOutputReference <a name="StageExternalAzureTimeoutsOutputReference" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer"></a>

```typescript
import { stageExternalAzure } from '@cdktn/provider-snowflake'

new stageExternalAzure.StageExternalAzureTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StageExternalAzureTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.stageExternalAzure.StageExternalAzureTimeouts">StageExternalAzureTimeouts</a>

---



