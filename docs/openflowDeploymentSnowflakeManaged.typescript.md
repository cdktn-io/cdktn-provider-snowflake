# `openflowDeploymentSnowflakeManaged` Submodule <a name="`openflowDeploymentSnowflakeManaged` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentSnowflakeManaged <a name="OpenflowDeploymentSnowflakeManaged" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed snowflake_openflow_deployment_snowflake_managed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged(scope: Construct, id: string, config: OpenflowDeploymentSnowflakeManagedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig">OpenflowDeploymentSnowflakeManagedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig">OpenflowDeploymentSnowflakeManagedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable">resetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts"></a>

```typescript
public putTimeouts(value: OpenflowDeploymentSnowflakeManagedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEventTable` <a name="resetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable"></a>

```typescript
public resetEventTable(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenflowDeploymentSnowflakeManaged to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpenflowDeploymentSnowflakeManaged that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentSnowflakeManaged to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput">eventTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable">eventTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput"></a>

```typescript
public readonly describeOutput: OpenflowDeploymentSnowflakeManagedDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters"></a>

```typescript
public readonly parameters: OpenflowDeploymentSnowflakeManagedParametersList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput"></a>

```typescript
public readonly showOutput: OpenflowDeploymentSnowflakeManagedShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `eventTableInput`<sup>Optional</sup> <a name="eventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput"></a>

```typescript
public readonly eventTableInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpenflowDeploymentSnowflakeManagedTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable"></a>

```typescript
public readonly eventTable: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentSnowflakeManagedConfig <a name="OpenflowDeploymentSnowflakeManagedConfig" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

const openflowDeploymentSnowflakeManagedConfig: openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName">displayName</a></code> | <code>string</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable">eventTable</a></code> | <code>string</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable"></a>

```typescript
public readonly eventTable: string;
```

- *Type:* string

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowDeploymentSnowflakeManagedTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

### OpenflowDeploymentSnowflakeManagedDescribeOutput <a name="OpenflowDeploymentSnowflakeManagedDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

const openflowDeploymentSnowflakeManagedDescribeOutput: openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput = { ... }
```


### OpenflowDeploymentSnowflakeManagedParameters <a name="OpenflowDeploymentSnowflakeManagedParameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

const openflowDeploymentSnowflakeManagedParameters: openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters = { ... }
```


### OpenflowDeploymentSnowflakeManagedParametersEventTable <a name="OpenflowDeploymentSnowflakeManagedParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

const openflowDeploymentSnowflakeManagedParametersEventTable: openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable = { ... }
```


### OpenflowDeploymentSnowflakeManagedShowOutput <a name="OpenflowDeploymentSnowflakeManagedShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

const openflowDeploymentSnowflakeManagedShowOutput: openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput = { ... }
```


### OpenflowDeploymentSnowflakeManagedTimeouts <a name="OpenflowDeploymentSnowflakeManagedTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

const openflowDeploymentSnowflakeManagedTimeouts: openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentSnowflakeManagedDescribeOutputList <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```typescript
public readonly useUserAuthOverPrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentSnowflakeManagedDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a>

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableList <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentSnowflakeManagedParametersEventTable;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a>

---


### OpenflowDeploymentSnowflakeManagedParametersList <a name="OpenflowDeploymentSnowflakeManagedParametersList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentSnowflakeManagedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedParametersOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable">eventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable"></a>

```typescript
public readonly eventTable: OpenflowDeploymentSnowflakeManagedParametersEventTableList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentSnowflakeManagedParameters;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a>

---


### OpenflowDeploymentSnowflakeManagedShowOutputList <a name="OpenflowDeploymentSnowflakeManagedShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get"></a>

```typescript
public get(index: number): OpenflowDeploymentSnowflakeManagedShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedShowOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType">vpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname"></a>

```typescript
public readonly customIngressHostname: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink"></a>

```typescript
public readonly usePrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```typescript
public readonly useUserAuthOverPrivateLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType"></a>

```typescript
public readonly vpcType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowDeploymentSnowflakeManagedShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a>

---


### OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference <a name="OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer"></a>

```typescript
import { openflowDeploymentSnowflakeManaged } from '@cdktn/provider-snowflake'

new openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpenflowDeploymentSnowflakeManagedTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---



