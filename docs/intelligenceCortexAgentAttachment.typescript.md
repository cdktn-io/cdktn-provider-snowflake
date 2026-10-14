# `intelligenceCortexAgentAttachment` Submodule <a name="`intelligenceCortexAgentAttachment` Submodule" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntelligenceCortexAgentAttachment <a name="IntelligenceCortexAgentAttachment" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment snowflake_intelligence_cortex_agent_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

new intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment(scope: Construct, id: string, config: IntelligenceCortexAgentAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig">IntelligenceCortexAgentAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig">IntelligenceCortexAgentAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: IntelligenceCortexAgentAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntelligenceCortexAgentAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntelligenceCortexAgentAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntelligenceCortexAgentAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput">cortexAgentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput">snowflakeIntelligenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName">cortexAgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName">snowflakeIntelligenceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: IntelligenceCortexAgentAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a>

---

##### `cortexAgentNameInput`<sup>Optional</sup> <a name="cortexAgentNameInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput"></a>

```typescript
public readonly cortexAgentNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `snowflakeIntelligenceNameInput`<sup>Optional</sup> <a name="snowflakeIntelligenceNameInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput"></a>

```typescript
public readonly snowflakeIntelligenceNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IntelligenceCortexAgentAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `cortexAgentName`<sup>Required</sup> <a name="cortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName"></a>

```typescript
public readonly cortexAgentName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `snowflakeIntelligenceName`<sup>Required</sup> <a name="snowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName"></a>

```typescript
public readonly snowflakeIntelligenceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntelligenceCortexAgentAttachmentConfig <a name="IntelligenceCortexAgentAttachmentConfig" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.Initializer"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

const intelligenceCortexAgentAttachmentConfig: intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName">cortexAgentName</a></code> | <code>string</code> | Fully qualified name of the Cortex agent to attach. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName">snowflakeIntelligenceName</a></code> | <code>string</code> | Fully qualified name of the Snowflake Intelligence object to attach the agent to. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cortexAgentName`<sup>Required</sup> <a name="cortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName"></a>

```typescript
public readonly cortexAgentName: string;
```

- *Type:* string

Fully qualified name of the Cortex agent to attach.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#cortex_agent_name IntelligenceCortexAgentAttachment#cortex_agent_name}

---

##### `snowflakeIntelligenceName`<sup>Required</sup> <a name="snowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName"></a>

```typescript
public readonly snowflakeIntelligenceName: string;
```

- *Type:* string

Fully qualified name of the Snowflake Intelligence object to attach the agent to.

The account default object is SNOWFLAKE_INTELLIGENCE_OBJECT_DEFAULT. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#snowflake_intelligence_name IntelligenceCortexAgentAttachment#snowflake_intelligence_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntelligenceCortexAgentAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#timeouts IntelligenceCortexAgentAttachment#timeouts}

---

### IntelligenceCortexAgentAttachmentTimeouts <a name="IntelligenceCortexAgentAttachmentTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.Initializer"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

const intelligenceCortexAgentAttachmentTimeouts: intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntelligenceCortexAgentAttachmentTimeoutsOutputReference <a name="IntelligenceCortexAgentAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { intelligenceCortexAgentAttachment } from '@cdktn/provider-snowflake'

new intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntelligenceCortexAgentAttachmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---



